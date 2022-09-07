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

export const Input = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  padding-left: 30px;
  border: 1px solid gray;
  margin-top: 50px;
`;

export const ItemWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextArea = styled.textarea`
  width: 600px;
  height: 300px;
  margin-top: 30px;
  margin-bottom: 50px;
  font-size: 18px;
  padding: 30px;
  border-radius: 20px;
`;

export const ErrorText = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 16px;
`;
