import { FilterList } from "src/components";
import * as S from "./PostListPage.style";
import PostItem from "src/components/PostItem";
import { Values } from "./types";
import { useEffect, useState } from "react";
import { axiosAuthInstance } from "src/apis/axiosInstances";
import { useRecoilValue } from "recoil";
import { sportsCategory } from "src/recoil/category";
import { userInfo } from "src/recoil/user";
import { AxiosResponse } from "axios";
import { Response } from "../PostListPage/types";

const PostListPage = () => {
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
  const user = useRecoilValue(userInfo);
  const [isLoading, setIsLoading] = useState(true);

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

        setState({
          values: data.values,
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
    <S.Container>
      <S.Input placeholder="검색어를 입력하세요" />
      <FilterList />
      <S.ListContainer>
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
        {isLoading && <span>여기에 로딩 이미지 들어감다</span>}
      </S.ListContainer>
    </S.Container>
  );
};

export default PostListPage;
