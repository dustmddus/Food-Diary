import * as S from "./Distance.style";
import Text from "../Text";
import DistanceSlider from "../DistanceSlider";
import { useRef } from "react";
const Distance = () => {
  const distance = useRef<number>(5);
  const setDistance = (value: number) => {
    distance.current = value;
  };

  return (
    <S.Container>
      <S.TextWrapper>현재 위치를 기준으로 내 동네가 설정됩니다.</S.TextWrapper>
      <S.TextWrapper>
        <Text size="20px" weight="bold">
          서울시 어쩌구 저쩌구
        </Text>
        에 있군요!
      </S.TextWrapper>

      <S.TextWrapper>
        현 위치를 기준으로 매칭 가능한 거리를 설정해주세요.
      </S.TextWrapper>
      <DistanceSlider setDistance={setDistance} distance={distance.current} />
    </S.Container>
  );
};

export default Distance;
