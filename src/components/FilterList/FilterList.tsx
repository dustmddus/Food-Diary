import FilterButton from "../FilterButton";
import * as S from "./FilterList.style";

const FilterList = () => {
  return (
    <S.Container>
      <FilterButton>축구</FilterButton>
      <FilterButton>야구</FilterButton>
      <FilterButton>농구</FilterButton>
      <FilterButton>배드민턴</FilterButton>
      <FilterButton>테니스</FilterButton>
      <FilterButton>볼링</FilterButton>
      <FilterButton>기타</FilterButton>
    </S.Container>
  );
};

export default FilterList;
