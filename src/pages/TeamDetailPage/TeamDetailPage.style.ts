import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 100px;
`;

export const CoverImg = styled.div`
  width: 100%;
  height: 250px;
  background-color: #fff6ca;
`;

export const ProfileImg = styled.img`
  width: 100px;
`;

export const Info = styled.div``;
export const InfoWrapper = styled.div``;

export const Description = styled.div`
  display: flex;
  position: absolute;
  transform: translateY(-50%);
  left: 20%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  transform: translateY(-50%);
  right: 20%;
`;

export const InnerWrapper = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 600px;
  height: 250px;
  padding: 30px;
  font-size: 18px;
  border-radius: 20px;
  background-color: #e6e6e6;
`;

export const MatchHistory = styled.div`
  margin: 40px 0;
`;

export const MatchReview = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const ReviewWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: space-around;
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewImg = styled.img`
  width: 70px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const TeamWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const MemberList = styled.div`
  width: 600px;
`;

export const MemberProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-bottom: 15px;
`;

export const MemberImg = styled.img`
  width: 60px;
  margin-right: 20px;
`;
