import PostItem from "../../components/PostItem";
import mainImg from "../../assets/mainImg.svg";
import FilterList from "../../components/FilterList";
import * as S from "./MainPage.style";
const MainPage = () => {
  return (
    <>
      <S.Container>
        <S.ImgWrapper>
          <img src={mainImg} width="600px" />
        </S.ImgWrapper>
        <FilterList />
        <S.Title>농구 같이 해요!</S.Title>
        <S.Content>
          <PostItem />
          <PostItem />
          <PostItem />
          <S.MoreButton>더보기</S.MoreButton>
        </S.Content>
        <S.Title>최근 성사된 매치</S.Title>
      </S.Container>
    </>
  );
};

export default MainPage;
