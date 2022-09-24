import * as S from "./PrivacyBlock.style";
import { useEffect, useState } from "react";
import Alarm from "src/assets/alarm.svg";
import Avatar from "src/assets/avatar.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Text from "src/components/Text";
import { Address, kakaoMapApi } from "src/apis/api/kakaoMapApi";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LocationModal } from "src/recoil/modal";
import { loginStatus } from "src/recoil/authentication";
import { userLocation } from "src/recoil/user";
import { userInfo } from "src/recoil/user";
import useClickAway from "src/hooks/useClickAway";
import Button from "src/components/Button";
import Notification from "src/assets/notification_off.png";
import { Response, Values } from "./type";
import { userLogout } from "src/apis/api/auth";
import { getInvitationList } from "src/apis/api/invitation";
import AlarmList from "./AlarmList";

const PrivacyBlock = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showAlarm, setShowAlarm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const setIsLogin = useSetRecoilState(loginStatus);
  const [user, setUser] = useRecoilState(userInfo);
  const setLocationName = useSetRecoilState(userLocation);
  const [kakaoLoading, setKakaoLoading] = useState<boolean>(true);
  const [address, setAddress] = useState<Address>({
    address_name: "",
    region_1depth_name: "",
    region_2depth_name: "",
    region_3depth_name: "",
    mountain_yn: "",
    main_address_no: "",
    sub_address_no: "",
  });
  const [alarm, setAlarm] = useState<Response>({
    values: [],
    hasNext: false,
    cursor: {
      createdAt: "",
      id: null,
    },
  });

  const [isOpenLocationModal, setOpenLocationModal] =
    useRecoilState(LocationModal);

  const ref = useClickAway(() => {
    setShowAlarm(false);
    setShowProfile(false);
  });

  const setDistance = () => {
    setOpenLocationModal(!isOpenLocationModal);
  };

  const handleAlarmClick = async () => {
    setShowAlarm((prev) => !prev);
    if (!showAlarm) {
      try {
        const data = await getInvitationList();
        setAlarm(data);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleProfileClick = () => {
    setShowProfile((prev) => !prev);
  };

  const handleMyPage = () => {
    navigate(`/personal/profile/${user.id}`);
  };

  const handleLogout = async () => {
    try {
      const res = await userLogout();
      if (res.status === 200) {
        setShowProfile((prev) => !prev);
        setUser({});
        setIsLogin(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getMoreAlarm = () => {
    navigate("/notification");
  };

  useEffect(() => {
    setKakaoLoading(true);
    async function fetchAddress() {
      if (user.latitude && user.longitude) {
        await kakaoMapApi(user.latitude, user.longitude, setAddress);
        setKakaoLoading(false);
      }
    }
    fetchAddress();
    setLocationName(address.region_3depth_name);
  }, []);

  useEffect(() => {
    setShowAlarm(false);
    setShowProfile(false);
  }, [location]);

  return (
    <S.Container ref={ref}>
      <S.ItemWrapper>
        <S.Location onClick={setDistance}>
          {" "}
          {kakaoLoading ? (
            <Text>설정 중...</Text>
          ) : (
            <Text weight="600">{address.region_3depth_name}</Text>
          )}
        </S.Location>

        <S.Alarm src={Alarm} onClick={handleAlarmClick} />
        {showAlarm && (
          <S.AlarmWrapper>
            <Text size="13px">초대 알림👀</Text>
            <S.Divider />
            {alarm.values.map((item: Values) => (
              <AlarmList item={item} />
            ))}
            {alarm.values.length !== 0 ? (
              <S.ButtonWrapper>
                <Link to="/">
                  <Button
                    width="165px"
                    height="25px"
                    fontSize="14px"
                    buttonType="yellow"
                    onClick={getMoreAlarm}
                  >
                    알림 목록
                  </Button>
                </Link>
              </S.ButtonWrapper>
            ) : (
              <S.EmptyList>
                <S.Noti src={Notification} />
                <Text weight={600}>알림이 없습니다.</Text>
              </S.EmptyList>
            )}
          </S.AlarmWrapper>
        )}
        <S.Avatar onClick={handleProfileClick} src={Avatar} />
        {showProfile && (
          <S.ProfileWrapper>
            <Text onClick={handleMyPage}>내 정보</Text>
            <S.Divider />
            <Text>내 글 보기</Text>
            <S.Divider />
            <Text onClick={handleLogout}>로그아웃</Text>
          </S.ProfileWrapper>
        )}
      </S.ItemWrapper>
    </S.Container>
  );
};

export default PrivacyBlock;
