import * as S from "./PostItem.style";

interface Props {
  title: string;
  distance: number;
  date: string;
  category: string;
  matchType: string;
}

const PostItem = ({ title, distance, date, category, matchType }: Props) => {
  return (
    <S.Container>
      <S.Description>
        <S.Title>{title}</S.Title>
        <S.Info>
          <S.Distance>약 {distance}km</S.Distance>
          <S.Date>{date}</S.Date>
        </S.Info>
      </S.Description>
      <S.Status>
        <S.SportsBadge>{category}</S.SportsBadge>
        <S.TeamBadge>{matchType}</S.TeamBadge>
      </S.Status>
    </S.Container>
  );
};

export default PostItem;
