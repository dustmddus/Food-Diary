import * as S from "./PostDetailPage.style";
import dummyData from "./dummyData";
import Avatar from "../../assets/avatar.svg";
import { Link, useLocation } from "react-router-dom";

const PostDetailPage = () => {
  const { data } = dummyData;
  const location = useLocation();
  const postId = location.pathname.split("/")[3];
  console.log(postId);

  return (
    <S.Container>
      <S.Status>
        <S.Info>
          <S.Title>{data.title}</S.Title>
          <S.UserWrapper>
            <img src={Avatar} width="40px" />
            <S.User>{data.author.nickname}</S.User>
          </S.UserWrapper>
          <S.ContentWrapper>
            <S.ItemWrapper>
              <S.ItemTitle>팀명</S.ItemTitle>
              <S.Item>
                <Link to={`/team/profile/${data.team.id}`}>
                  <S.TeamInfo>
                    <img src={Avatar} width="25px" />
                    <S.Item>{data.team.name}</S.Item>
                  </S.TeamInfo>
                </Link>
              </S.Item>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <S.ItemTitle>종목</S.ItemTitle>
              <S.Item>{data.team.sportsCategory}</S.Item>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <S.ItemTitle>개인전/팀전</S.ItemTitle>
              <S.Item>
                {data.matchDate === "TEAM_MATCH" ? "팀전" : "개인전"}
              </S.Item>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <S.ItemTitle>경기 일자</S.ItemTitle>
              <S.Item>{data.matchDate}</S.Item>
            </S.ItemWrapper>
          </S.ContentWrapper>
        </S.Info>
        <S.Badge>{data.status === "WAITING" ? "모집 중" : "모집 완료"}</S.Badge>
      </S.Status>
      <S.Line />
      <S.Content>{data.content}</S.Content>
      <Link to="/proposal">
        <S.Button>신청하기</S.Button>
      </Link>
    </S.Container>
  );
};

export default PostDetailPage;
