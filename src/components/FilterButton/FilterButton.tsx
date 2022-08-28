import * as S from "./FilterButton.style";

interface Props {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
}
const FilterButton = ({ children, onClick, active, ...props }: Props) => {
  return (
    <S.FilterButton active={active} onClick={onClick} {...props}>
      {children}
    </S.FilterButton>
  );
};

export default FilterButton;
