import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  height: 90px;
  margin: 40px;
  padding-top: 25px;
  padding-left: 40px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px gray;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 20px;
`;

export const Info = styled.div`
  display: flex;
  margin-top: 8px;
  color: gray;
`;

export const Distance = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

export const Date = styled.span`
  font-size: 16px;
`;

export const Status = styled.div`
  display: flex;
  margin-right: 40px;
`;

export const SportsBadge = styled.div`
  background-color: #ffd400;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 80px;
  height: 30px;
  font-size: 16px;
`;
export const TeamBadge = styled.div`
  background-color: #a7ed4d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 80px;
  height: 30px;
  font-size: 16px;
`;
