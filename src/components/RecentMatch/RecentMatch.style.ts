import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 150px;
  width: 850px;
  height: 400px;
  padding: 70px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0px 0px 10px gray;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeamInfoBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  border: 2px solid #ffd400;
  border-radius: 10px;
  color: #ffd400;
`;

export const Info = styled.div`
  margin-top: 30px;
`;

export const InfoDetail = styled.div`
  background-color: #ffd400;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
`;

export const DetailItem = styled.div`
  font-size: 16px;
  margin: 10px;
`;
