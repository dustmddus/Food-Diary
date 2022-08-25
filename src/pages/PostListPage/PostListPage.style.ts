import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 600px;
  height: 70px;
  border-radius: 10px;
  margin-bottom: 50px;
  padding: 20px;
  border: none;
  border: 2px solid #ffd400;
  font-size: 16px;
  &::placeholder {
    color: lightgray;
  }
  &:focus {
    outline: none;
  }
`;

export const ListContainer = styled.div``;
