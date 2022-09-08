import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form``;
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 10px;
  padding: 20px;
  border: none;
  border: 2px solid #ffd400;
  margin-right: 10px;
  font-size: 16px;
  &::placeholder {
    color: lightgray;
  }
  &:focus {
    outline: none;
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const Name = styled.span`
  margin-left: 30px;
`;

export const Result = styled.div``;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 300px;
`;
