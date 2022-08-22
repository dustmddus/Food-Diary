import * as S from "./TeamProfile.style";
import Avatar from "../../../assets/avatar.svg";
const TeamProfile = () => {
  return (
    <S.Container>
      <img src={Avatar} width="100px" />
      <S.Name>한사랑 농구팀</S.Name>
    </S.Container>
  );
};

export default TeamProfile;
