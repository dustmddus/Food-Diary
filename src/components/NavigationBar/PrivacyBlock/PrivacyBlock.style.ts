import styled from "@emotion/styled";

export const Container = styled.div``;

export const ItemWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Alarm = styled.img`
  width: 22px;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const Location = styled.span`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

export const AlarmWrapper = styled.div`
  position: absolute;
  width: 200px;
  height: 250px;
  max-width: 200px;
  min-width: 0;
  overflow: auto;
  padding: 15px;
  top: 90%;
  right: 1%;
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

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

export const AlarmListWrapper = styled.div``;

export const TeamName = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const Item = styled.span`
  font-size: 14px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding: 5px 0;
  align-items: center;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const TextWrapper = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Noti = styled.img`
  width: 50px;
  margin-bottom: 10px;
`;

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25%;
`;
