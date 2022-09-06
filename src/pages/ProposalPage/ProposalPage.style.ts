import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  margin-bottom: 150px;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const TextArea = styled.textarea`
  width: 600px;
  height: 300px;
  margin-top: 30px;
  font-size: 18px;
  padding: 30px;
  border-radius: 20px;
`;

export const ItemWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 600px;
  height: 60px;
  margin-top: 50px;
  border-radius: 20px;
  border: none;
  background-color: #89cffd;
  font-size: 20px;
  color: white;
  font-weight: 600;
`;

export const ErrorText = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 16px;
`;

export const AlertText = styled.div`
  margin-top: 25px;
  color: red;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamCreateButton = styled.button`
  width: 300px;
  height: 50px;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  background-color: #cca9dd;
  border: none;
  margin-top: 20px;
`;
