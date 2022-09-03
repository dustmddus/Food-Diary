import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 70px;
  position: fixed;
  top: 0;
`;

export const DialogBox = styled.dialog`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: #fffae4;
  z-index: 10000;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 70px;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;
