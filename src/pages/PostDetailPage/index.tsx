import * as S from "./PostDetailPage.style";
import Avatar from "../../assets/avatar.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { PostDetail } from "./type";
import { useRecoilValue } from "recoil";
import { userInfo } from "src/recoil/user";
import Badge from "src/components/Badge";
import Dropdown from "src/components/Dropdown";
import {
  MATCH_STATUS_DROPDOWN,
  MATCH_STATUS_TEXT,
} from "src/constants/category";
import { getPostDetail } from "src/apis/api/post";

const PostDetailPage = () => {
  const user = useRecoilValue(userInfo);
  const location = useLocation();
  const postId = location.pathname.split("/")[3];
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);
  const [postDetail, setPostDetail] = useState<PostDetail>();

  useEffect(() => {
    setIsLoading(true);
    const getDetail = async () => {
      try {
        setIsLoading(true);
        const res = await getPostDetail(postId);
        const data = (res.data as AxiosResponse).data as PostDetail;
        setPostDetail(data);
        setIsAuthor(data.author.id === user.id);
        setStatus(data.status);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getDetail();
  }, []);

  return (
    <S.Container>
      <S.Status>
        <S.Info>
          <S.Title>{postDetail?.title}</S.Title>
          <S.UserWrapper>
            {postDetail?.author.profileImageUrl ? (
              <S.Img src={postDetail.author.profileImageUrl} />
            ) : (
              <img src={Avatar} width="30px" />
            )}

            <S.User>{postDetail?.author.nickname}</S.User>
          </S.UserWrapper>
          <S.ContentWrapper>
            {postDetail?.team && (
              <S.ItemWrapper>
                <S.ItemTitle>팀명</S.ItemTitle>
                <S.Item>
                  <Link to={`/team/profile/${postDetail.team.id}`}>
                    <S.TeamInfo>
                      {postDetail.team.logoImageUrl ? (
                        <S.Img src={postDetail.team.logoImageUrl} />
                      ) : (
                        <img src={Avatar} width="25px" />
                      )}
                      <S.Item>{postDetail.team.name}</S.Item>
                    </S.TeamInfo>
                  </Link>
                </S.Item>
              </S.ItemWrapper>
            )}
            <S.ItemWrapper>
              <S.ItemTitle>종목</S.ItemTitle>
              <S.Item>{postDetail?.sportsCategory}</S.Item>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <S.ItemTitle>개인전/팀전</S.ItemTitle>
              <S.Item>
                {postDetail?.matchDate === "TEAM_MATCH" ? "팀전" : "개인전"}
              </S.Item>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <S.ItemTitle>경기 인원</S.ItemTitle>
              <S.Item>{postDetail?.participants}</S.Item>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <S.ItemTitle>경기 일자</S.ItemTitle>
              <S.Item>{postDetail?.matchDate}</S.Item>
            </S.ItemWrapper>
          </S.ContentWrapper>
        </S.Info>
        {isAuthor ? (
          <Badge width="110px" height="40px">
            {/* 여기 드롭다운 디자인하기 */}
            <Dropdown
              width="110px"
              height="40px"
              fontSize="16px"
              placeholder={MATCH_STATUS_TEXT[status]}
              valueList={MATCH_STATUS_DROPDOWN}
            />
          </Badge>
        ) : (
          <Badge width="110px" height="40px" BadgeType={status}>
            {MATCH_STATUS_TEXT[status]}
          </Badge>
        )}
        {/* {postDetail?.status === "WAITING" ? (
          
        ) : (
          "모집 완료"
        )} */}
      </S.Status>
      <S.Content>{postDetail?.content}</S.Content>
      {isAuthor && (
        // 채팅리스트로 이동
        <Link to="/">
          <S.Button>채팅 목록</S.Button>
        </Link>
      )}
      {!isAuthor && postDetail?.proposer === null && (
        <Link to={`/proposal/${postId}`}>
          <S.Button>신청하기</S.Button>
        </Link>
      )}

      {!isAuthor && postDetail?.proposer?.status === "WAITING" && (
        <S.InnerWrapper>
          <Badge
            width="650px"
            height="60px"
            fontSize="20px"
            BadgeType="DISABLED"
            borderRadius="10px"
          >
            대화 수락시 채팅 버튼이 활성화됩니다.
          </Badge>
        </S.InnerWrapper>
      )}
      {!isAuthor && postDetail?.proposer?.status === "REFUSE" && (
        <S.InnerWrapper>
          <Badge
            width="650px"
            height="60px"
            fontSize="20px"
            BadgeType="REFUSE"
            borderRadius="10px"
          >
            대화 신청이 거절되었습니다
          </Badge>
        </S.InnerWrapper>
      )}
      {!isAuthor && postDetail?.proposer?.status === "APPROVED" && (
        // 채팅방으로 이동
        <Link to="/">
          <S.Button>채팅방 이동</S.Button>
        </Link>
      )}
    </S.Container>
  );
};

export default PostDetailPage;
