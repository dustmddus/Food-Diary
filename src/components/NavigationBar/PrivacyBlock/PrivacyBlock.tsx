import * as S from "./PrivacyBlock.style";
import { useEffect, useState } from "react";
import Alarm from "../../../assets/alarm.svg";
import Avatar from "../../../assets/avatar.svg";
import { useLocation } from "react-router-dom";
import Text from "src/components/Text";
const PrivacyBlock = () => {
  const location = useLocation();
  const [showAlarm, setShowAlarm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleAlarmClick = () => {
    setShowAlarm((prev) => !prev);
  };

  const handleProfileClick = () => {
    setShowProfile((prev) => !prev);
  };

  useEffect(() => {
    setShowAlarm(false);
  }, [location]);

  return (
    <S.Container>
      {/* 전역 user 정보 위치 넣기 */}
      <S.Location>연남동</S.Location>
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
          <Text>로그아웃</Text>
        </S.ProfileWrapper>
      )}
    </S.Container>
  );
};

export default PrivacyBlock;
