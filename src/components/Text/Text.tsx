import * as S from "./Text.style";

interface Props {
  children: React.ReactNode;
  size?: string;
  color?: string;
  weight?: string | number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const defaultProps = {
  size: "14px",
};

const Text = ({ children, size, color, weight, onClick, ...styles }: Props) => {
  return (
    <>
      <S.Text
        size={size}
        color={color}
        weight={weight}
        onClick={onClick}
        {...styles}
      >
        {children}
      </S.Text>
    </>
  );
};

Text.defaultProps = defaultProps;

export default Text;
