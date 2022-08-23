import { FilterList } from "src/components";
import * as S from "./PostListPage.style";
import { dummyData } from "./dummyData";
import PostItem from "src/components/PostItem";
import { Values } from "./types";

const PostListPage = () => {
  return (
    <S.Container>
      <FilterList />
      <S.ListContainer>
        {dummyData.data.values.map((i: Values) => (
          <PostItem
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
