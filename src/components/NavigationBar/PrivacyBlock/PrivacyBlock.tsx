import * as S from "./PrivacyBlock.style";
import { useEffect, useState } from "react";
import Alarm from "../../../assets/alarm.svg";
import Avatar from "../../../assets/avatar.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "src/components/Text";
import { Address, kakaoMapApi } from "../../../apis/kakaoMapApi";
import { useRecoilState, useRecoilValue } from "recoil";
import { LocationModal } from "src/recoil/modal";
import { axiosAuthInstance } from "src/apis/axiosInstances";
import { loginStatus } from "src/recoil/authentication";
import { userLocation } from "src/recoil/user";
import { userInfo } from "src/recoil/user";
import useClickAway from "src/hooks/useClickAway";

const PrivacyBlock = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showAlarm, setShowAlarm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(loginStatus);
  const user = useRecoilValue(userInfo);
  const [locationName, setLocationName] = useRecoilState(userLocation);
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
  const [isOpenLocationModal, setOpenLocationModal] =
    useRecoilState(LocationModal);

  const ref = useClickAway(() => {
    setShowAlarm(false);
    setShowProfile(false);
    setOpenLocationModal(false);
  });

  const setDistance = () => {
    setOpenLocationModal(!isOpenLocationModal);
  };

  const handleAlarmClick = () => {
    setShowAlarm((prev) => !prev);
  };

  const handleProfileClick = () => {
    setShowProfile((prev) => !prev);
  };

  const handleMyPage = () => {
    navigate(`/personal/profile/${user.id}`);
  };

  const handleLogout = () => {
    (async () => {
      try {
        await axiosAuthInstance.delete(`/api/users/signout`).then((res) => {
          if (res.status === 200) {
            setShowProfile((prev) => !prev);
            // 사용자 정보도 지워주기
            setIsLogin(false);
          }
        });
      } catch (e) {
        // 에러 처리 필요
        console.log(e);
      }
    })();
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
            <Text size="13px">알림 왔슈👀</Text>
            <S.Divider />
            <span>여기 알람</span>
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
