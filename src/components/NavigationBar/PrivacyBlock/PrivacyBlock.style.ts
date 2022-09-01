import styled from "@emotion/styled";

export const Container = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Alarm = styled.img`
  width: 22px;
`;

export const Avatar = styled.img`
  width: 30px;
`;

export const Location = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export const AlarmWrapper = styled.div`
  position: absolute;
  width: 200px;
  max-width: 200px;
  overflow: auto;
  padding: 15px;
  top: 90%;
  right: 9%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const Divider = styled.hr`
  width: 100%;
  color: "#E6E6E6";
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 110px;
  max-width: 150px;
  padding: 15px;
  top: 90%;
  right: 1%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
