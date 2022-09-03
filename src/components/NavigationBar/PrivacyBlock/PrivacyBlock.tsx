import * as S from "./PrivacyBlock.style";
import { useEffect, useState } from "react";
import Alarm from "../../../assets/alarm.svg";
import Avatar from "../../../assets/avatar.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "src/components/Text";
import { useRecoilState } from "recoil";
import { LocationModal } from "src/recoil/modal";
import { axiosAuthInstance } from "src/apis/axiosInstances";
import { loginStatus } from "src/recoil/authentication";

const PrivacyBlock = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showAlarm, setShowAlarm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(loginStatus);

  const [isOpenLocationModal, setOpenLocationModal] =
    useRecoilState(LocationModal);

  const setDistance = () => {
    setOpenLocationModal(!isOpenLocationModal);
  };

  const handleAlarmClick = () => {
    setShowAlarm((prev) => !prev);
  };

  const handleProfileClick = () => {
    setShowProfile((prev) => !prev);
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
    setShowAlarm(false);
  }, [location]);

  return (
    <S.Container>
      <S.ItemWrapper>
        {/* 전역 user 정보 위치 넣기 */}
        <S.Location onClick={setDistance}>연남동</S.Location>

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
            <Text>내 정보</Text>
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
