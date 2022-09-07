import * as S from "./Button.style";

interface Props {
  width?: string;
  height?: string;
  fontSize?: string;
  color?: string;
  borderRadius?: string;
  fontColor?: string;
  fontWeight?: string;
  children?: string | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonType?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  width = "700px",
  height = "60px",
  borderRadius = "20px",
  color,
  type = "button",
  fontColor = "white",
  fontWeight = "600",
  buttonType,
  onClick,
  fontSize = "20px",
  disabled,
  children,
}: Props) => (
  <S.Button
    color={color}
    width={width}
    height={height}
    fontSize={fontSize}
    fontWeight={fontWeight}
    buttonType={buttonType}
    fontColor={fontColor}
    onClick={onClick}
    borderRadius={borderRadius}
    type={type}
    disabled={disabled}
  >
    {children}
  </S.Button>
);

export default Button;
