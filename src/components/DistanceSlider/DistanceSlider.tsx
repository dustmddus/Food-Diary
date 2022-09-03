import { ChangeEvent, useRef } from "react";
import * as S from "./DistanceSlider.styles";

interface Props {
  distance: number;
  setDistance: (value: number) => void;
}

const DistanceSlider = ({ distance, setDistance }: Props) => {
  const [min, max] = [0, 40];
  const step = 5;
  const width = 388;
  const RangeTexts = [
    { id: 0, value: 0 },
    { id: 1, value: 5 },
    { id: 2, value: 10 },
    { id: 3, value: 15 },
    { id: 4, value: 20 },
    { id: 5, value: 25 },
    { id: 6, value: 30 },
    { id: 7, value: 35 },
    { id: 8, value: 40 },
  ];

  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDistance(e.target.valueAsNumber);
  };

  return (
    <S.Container>
      <S.RangeInput
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        onInput={handleChange}
        onChange={handleChange}
      />
      <S.TextWrapper>
        {RangeTexts.map((text) => (
          <S.RangeText key={text.id}>{text.value}</S.RangeText>
        ))}
      </S.TextWrapper>
    </S.Container>
  );
};

export default DistanceSlider;
