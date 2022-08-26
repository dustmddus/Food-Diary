import * as S from "./Text.style";

interface Props {
  children: React.ReactNode;
  size?: string;
  color?: string;
  weight?: string | number;
}

const defaultProps = {
  size: "14px",
};

const Text = ({ children, size, color, weight, ...styles }: Props) => {
  return (
    <>
      <S.Text size={size} color={color} weight={weight} {...styles}>
        {children}
      </S.Text>
    </>
  );
};

Text.defaultProps = defaultProps;

export default Text;
