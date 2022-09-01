import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 380px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid black;
  margin-top: 50px;
`;

export const LoginButton = styled.button`
  width: 170px;
  height: 50px;
  border: 10px;
  background-color: #ffd400;
  border-radius: 10px;
  margin-top: 60px;
  color: white;
  font-size: 18px;
`;

export const Text = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 18px;
  color: black;
`;

export const SignUpButton = styled.button`
  width: 170px;
  height: 50px;
  border: 10px;
  background-color: #a7ed4d;
  border-radius: 10px;
  color: white;
  font-size: 18px;
`;
