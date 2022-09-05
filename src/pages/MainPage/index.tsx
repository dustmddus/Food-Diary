import PostItem from "../../components/PostItem";
import mainImg from "../../assets/mainImg.svg";
import * as S from "./MainPage.style";
import { Link } from "react-router-dom";
import { Values } from "../PostListPage/type";
import { FilterList } from "src/components";
import { useRecoilValue } from "recoil";
import { sportsCategory } from "src/recoil/category";
import { SPORTS_CATEGORY_DROPDOWN } from "src/constants/category";
import { useEffect, useState } from "react";
import { Response } from "../PostListPage/type";
import { loginStatus } from "src/recoil/authentication";
import { axiosAuthInstance } from "src/apis/axiosInstances";
import { userInfo } from "src/recoil/user";
import { AxiosResponse } from "axios";

const MainPage = () => {
  const category = useRecoilValue(sportsCategory);
  const isLogin = useRecoilValue(loginStatus);
  const user = useRecoilValue(userInfo);
  const [isLoading, setIsLoading] = useState(true);

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
    const getPost = async () => {
      try {
        setIsLoading(true);
        const res = await axiosAuthInstance.get("/api/matches", {
          params: {
            size: 10,
            category,
            status: "WAITING",
            userId: "",
            distance: user.searchDistance,
          },
        });
        const data = (res.data as AxiosResponse).data as Response;
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
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getPost();
  }, [category]);

  return (
    <>
      <S.Container>
        <S.ImgWrapper>
          <img src={mainImg} width="500px" />
        </S.ImgWrapper>
        <FilterList />
        {SPORTS_CATEGORY_DROPDOWN.map(
          (item) =>
            item.value.sportsCategory === category && (
              <S.Title key={item.id}>{item.text} 같이 해요!</S.Title>
            )
        )}
        {isLogin ? (
          <>
            {!isLoading && state.values.length === 0 ? (
              <span>결과 없음 이미지</span>
            ) : (
              <>
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
                {!isLoading && (
                  <Link to="/postList">
                    <S.MoreButton>더보기</S.MoreButton>
                  </Link>
                )}
              </>
            )}
            {isLoading && <span>여기에 로딩 이미지 들어감다</span>}
          </>
        ) : (
          <>
            <S.InfoWrapper>여기에 로그인 안내 들어감다.</S.InfoWrapper>
          </>
        )}
      </S.Container>
    </>
  );
};

export default MainPage;
