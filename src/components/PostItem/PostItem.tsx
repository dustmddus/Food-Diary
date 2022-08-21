import * as S from "./PostItem.style";
const PostItem = () => {
  return (
    <S.Container>
      <S.Description>
        <S.Title>농구 같이 할 사람 구합니다.</S.Title>
        <S.Info>
          <S.Distance>약 19km</S.Distance>
          <S.Date>2022.08.18</S.Date>
        </S.Info>
      </S.Description>
      <S.Status>
        <S.SportsBadge>농구</S.SportsBadge>
        <S.TeamBadge>개인전</S.TeamBadge>
      </S.Status>
    </S.Container>
  );
};

export default PostItem;
