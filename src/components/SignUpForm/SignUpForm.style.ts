import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 50px;
`;
export const FormWrapper = styled.div`
  margin-bottom: 18px;
`;

export const ConfirmInput = styled.input`
  width: 280px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;
`;

export const Input = styled.input`
  width: 360px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 25px;
`;

export const ConfirmButton = styled.button`
  width: 80px;
  height: 30px;
  border: 10px;
  background-color: #ffd400;
  border-radius: 10px;
  color: white;
  font-size: 14px;
`;

export const SignUpButton = styled.button`
  width: 150px;
  height: 45px;
  border: 10px;
  background-color: #ffd400;
  border-radius: 10px;
  margin-top: 40px;
  color: white;
  font-size: 18px;
`;

export const SuccessText = styled.div`
  color: green;
`;

export const ErrorText = styled.div`
  color: red;
`;
