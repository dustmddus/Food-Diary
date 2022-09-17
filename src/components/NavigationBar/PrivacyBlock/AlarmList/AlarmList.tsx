import { Values } from "../type";
import Avatar from "src/assets/avatar.svg";
import * as S from "../PrivacyBlock.style";

interface Props {
  item: Values;
}

const AlarmList = ({ item }: Props) => {
  return (
    <S.AlarmListWrapper key={item.teamId}>
      <S.InfoWrapper>
        {item.logoImageUrl ? (
          <S.Img src={item.logoImageUrl} />
        ) : (
          <S.Img src={Avatar} />
        )}
        <S.TextWrapper>
          <S.TeamName>{item.name}팀</S.TeamName>
          <S.Item>의 초대</S.Item>
        </S.TextWrapper>
      </S.InfoWrapper>
    </S.AlarmListWrapper>
  );
};

export default AlarmList;
