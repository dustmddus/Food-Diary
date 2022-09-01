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
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 380px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;
  margin-top: 50px;
`;

export const LoginButton = styled.button`
  width: 150px;
  height: 45px;
  border: 10px;
  background-color: #ffd400;
  border-radius: 10px;
  margin-top: 40px;
  color: white;
  font-size: 16px;
`;

export const Text = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #8a8a8a;
`;

export const SignUpButton = styled.button`
  width: 150px;
  height: 45px;
  border: 10px;
  background-color: #a7ed4d;
  border-radius: 10px;
  color: white;
  font-size: 16px;
`;
