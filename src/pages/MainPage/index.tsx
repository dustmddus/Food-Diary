import mainImg from "../../assets/mainImg.svg";
import * as S from "./MainPage.style";
const MainPage = () => {
  return (
    <S.Container>
      <S.ImgWrapper>
        <img src={mainImg} width="600px" />
      </S.ImgWrapper>
    </S.Container>
  );
};

export default MainPage;
