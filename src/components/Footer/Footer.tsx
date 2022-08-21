import * as S from "./Footer.style";
import catchphrase from "../../assets/catchphrase.svg";
const Footer = () => {
  return (
    <S.Container>
      <S.ImgWrapper>
        <img src={catchphrase} width="350px" />
      </S.ImgWrapper>
      <S.FooterContent>
        <S.FooterItem>
          <S.Title>Notice</S.Title>
          <S.Content>[당첨자 발표]SFAM 2주년 감사 2벤트</S.Content>
        </S.FooterItem>
        <S.FooterItem>
          <S.Title>Contact Us</S.Title>
          <S.Content>삼승연과 만나고 싶다면 연락주세요!</S.Content>
        </S.FooterItem>
        <S.FooterItem>
          <S.Title>About 동규라미</S.Title>
          <S.Content>동규라미~</S.Content>
        </S.FooterItem>
        <S.FooterItem>
          <S.Title>FAQ</S.Title>
          <S.Content>궁금한 사항을 모아 한번에 보여드립니다. </S.Content>
        </S.FooterItem>
      </S.FooterContent>
      <S.FooterCopyright>
        <S.Copyright>
          Copyright ⓒ 2022 dustmddus All rights reserved.
        </S.Copyright>
      </S.FooterCopyright>
    </S.Container>
  );
};

export default Footer;
