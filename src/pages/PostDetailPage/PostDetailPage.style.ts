import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 100px;
  margin-bottom: 300px;
`;

export const Status = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 30px;
  margin-bottom: 50px;
`;

export const Info = styled.div``;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

export const User = styled.div`
  margin-left: 10px;
  font-size: 24px;
`;

export const Badge = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 150px;
  height: 50px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffd400;
  color: white;
`;

export const ContentWrapper = styled.div`
  margin-top: 50px;
`;
export const ItemWrapper = styled.div`
  display: flex;
`;

export const TeamInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  margin-bottom: 5px;
  font-size: 20px;
  width: 150px;
`;

export const ItemTitle = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 20px;
  width: 150px;
`;

export const Line = styled.hr`
  width: 63%;
  height: 2px;
  background-color: lightgray;
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 80px;
  width: 900px;
  height: 500px;
  background-color: #ffff;
  border: 1px solid black;
  border-radius: 20px;
  padding: 60px;
  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border: none;
  border-radius: 20px;
  width: 900px;
  height: 90px;
  background-color: #89cffd;
  color: white;
  font-weight: 600;
`;
