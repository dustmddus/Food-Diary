import PostItem from "../../components/PostItem";
import mainImg from "../../assets/mainImg.svg";
import FilterList from "../../components/FilterList";
import * as S from "./MainPage.style";
import RecentMatch from "src/components/RecentMatch";
import { Link } from "react-router-dom";
import { dummyData } from "../PostListPage/dummyData";
import { Values } from "../PostListPage/types";
import LoginForm from "src/components/LoginForm";
const MainPage = () => {
  return (
    <>
      <S.Container>
        <S.ImgWrapper>
          <LoginForm />
          <img src={mainImg} width="600px" />
        </S.ImgWrapper>
        <FilterList />
        <S.Title>농구 같이 해요!</S.Title>
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
        <S.Title>최근 성사된 매치</S.Title>
        <S.Content>
          <RecentMatch />
        </S.Content>
      </S.Container>
    </>
  );
};

export default MainPage;
