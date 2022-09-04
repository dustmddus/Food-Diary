import { useNavigate } from "react-router-dom";
import { MATCH_TYPE_TEXT, SPORTS_CATEGORY_TEXT } from "src/constants/category";
import Badge from "../Badge";
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
          <S.Distance>약 {Math.floor(distance)}km</S.Distance>
          <S.Date>작성일 {date.slice(2, 10).split("-").join(".")}</S.Date>
        </S.Info>
      </S.Description>
      <S.Status>
        <Badge>{SPORTS_CATEGORY_TEXT[category]}</Badge>
        <Badge BadgeType={matchType}>{MATCH_TYPE_TEXT[matchType]}</Badge>
      </S.Status>
    </S.Container>
  );
};

export default PostItem;
