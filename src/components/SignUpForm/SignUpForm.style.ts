import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 60px;
`;
export const FormWrapper = styled.div`
  margin-bottom: 15px;
`;

export const ConfirmInput = styled.input`
  width: 300px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;
`;

export const Input = styled.input`
  width: 400px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 40px;
`;

export const ConfirmButton = styled.button`
  width: 100px;
  height: 40px;
  border: 10px;
  background-color: #ffd400;
  border-radius: 10px;
  color: white;
  font-size: 18px;
`;

export const SignUpButton = styled.button`
  width: 170px;
  height: 50px;
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
