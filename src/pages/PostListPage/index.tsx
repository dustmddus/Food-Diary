import { FilterList } from "src/components";
import * as S from "./PostListPage.style";
import { dummyData } from "./dummyData";
import PostItem from "src/components/PostItem";
import { Values } from "./types";

const PostListPage = () => {
  return (
    <S.Container>
      <S.Input placeholder="검색어를 입력하세요" />
      <FilterList />
      <S.ListContainer>
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
      </S.ListContainer>
    </S.Container>
  );
};

export default PostListPage;
