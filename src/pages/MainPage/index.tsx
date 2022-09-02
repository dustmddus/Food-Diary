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
import { useEffect, useState } from "react";
import { Response } from "../PostListPage/types";

const MainPage = () => {
  const category = useRecoilValue(sportsCategory);
  const [state, setState] = useState<Response>({
    cursor: {
      createdAt: "",
      id: null,
    },
    values: [],
    hasNext: false,
    category: "",
  });

  useEffect(() => {
    //전체 포스트 api-거리 설정하고 붙이기.
    const data = dummyData.data;
    const latestPost = data.values
      .sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      })
      .filter((_, index) => index < 5);
    setState({
      values: latestPost,
      hasNext: data.hasNext,
      cursor: data.cursor,
      category: category,
    });
  }, [category]);

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
          {state.values.map((i: Values) => (
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
        </S.Content>
        <Link to="/postList">
          <S.MoreButton>더보기</S.MoreButton>
        </Link>
      </S.Container>
    </>
  );
};

export default MainPage;
