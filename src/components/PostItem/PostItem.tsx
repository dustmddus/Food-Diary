import { useNavigate } from "react-router-dom";
import * as S from "./PostItem.style";

interface Props {
  id: number;
  title: string;
  distance: number;
  date: string;
  category: string;
  matchType: string;
}

const PostItem = ({
  id,
  title,
  distance,
  date,
  category,
  matchType,
}: Props) => {
  const navigate = useNavigate();

  const handleOnClickItem = (id: number) => {
    navigate(`/post/detail/${id}`);
  };

  return (
    <S.Container onClick={() => handleOnClickItem(id)}>
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
