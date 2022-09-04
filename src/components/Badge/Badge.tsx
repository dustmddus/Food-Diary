import * as S from "./Badge.style";

interface Props {
  height?: string;
  width?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  fontColor?: string;
  BadgeType?: string;
  children?: string | JSX.Element;
}

const Badge = ({
  width = "80px",
  height = "30px",
  borderRadius = "20px",
  color = "#FFD400",
  fontColor = "white",
  fontSize = "16px",
  BadgeType,
  children,
}: Props) => {
  return (
    <S.Badge
      color={color}
      width={width}
      height={height}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontColor={fontColor}
      BadgeType={BadgeType}
    >
      {children}
    </S.Badge>
  );
};

export default Badge;
