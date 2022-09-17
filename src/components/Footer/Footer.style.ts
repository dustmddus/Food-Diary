import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  bottom: 0;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  background-color: #f2f2f2;
`;

export const ImgWrapper = styled.div`
  margin-top: 30px;
  margin-left: 20px;
`;
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #a58d1a;
`;
export const Content = styled.span`
  font-size: 14px;
`;

export const FooterCopyright = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #ffd400;
`;

export const Copyright = styled.p`
  width: fit-content;
  margin: 0 auto;
  color: white;
  font-size: 12px;
`;
