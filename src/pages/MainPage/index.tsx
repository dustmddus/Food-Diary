import PostItem from "../../components/PostItem";
import mainImg from "../../assets/mainImg.svg";
import * as S from "./MainPage.style";
import { Link } from "react-router-dom";
import { dummyData } from "../PostListPage/dummyData";
import { Values } from "../PostListPage/types";
import { FilterList } from "src/components";
import { useRecoilValue } from "recoil";
import { sportsCategory } from "src/recoil/category";
import { SPORTS_CATEGORY } from "src/constants/category";
// import { MainPost } from "src/apis/postAPI";

const MainPage = () => {
  const category = useRecoilValue(sportsCategory);

  // console.log(MainPost());

  return (
    <>
      <S.Container>
        <S.ImgWrapper>
          <img src={mainImg} width="500px" />
        </S.ImgWrapper>
        <FilterList />
        {SPORTS_CATEGORY.map(
          (item) =>
            item.value.sportsCategory === category && (
              <S.Title key={item.id}>{item.text} 같이 해요!</S.Title>
            )
        )}

        <S.Content>
          {dummyData.data.values.map((i: Values) => (
            <PostItem
              id={i.id}
              key={i.id}
              title={i.title}
              distance={i.distance}
              date={i.createdAt}
              category={i.category}
              matchType={i.matchType}
            />
          ))}
          <Link to="/postList">
            <S.MoreButton>더보기</S.MoreButton>
          </Link>
        </S.Content>
      </S.Container>
    </>
  );
};

export default MainPage;
