import styled from "@emotion/styled";
import DatePicker from "react-datepicker";

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
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 700px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  padding-left: 30px;
  border: 1px solid gray;
  margin-top: 30px;
`;

export const MatchType = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const MatchContent = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

export const MatchTypeInput = styled.input``;

export const Label = styled.label`
  font-size: 18px;
`;

export const ContentWrapper = styled.div``;

export const TextArea = styled.textarea`
  width: 700px;
  height: 300px;
  margin-top: 20px;
  font-size: 20px;
  padding: 30px;
  border-radius: 10px;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 700px;
  height: 60px;
  margin-top: 50px;
  border-radius: 20px;
  border: none;
  background-color: #89cffd;
  font-size: 20px;
  color: white;
  font-weight: 600;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SDatePicker = styled(DatePicker)`
  text-align: center;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 16px;
  box-sizing: border-box;
`;
