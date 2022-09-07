import styled from "@emotion/styled";

interface Props {
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  borderRadius?: string;
  fontColor?: string;
  buttonType?: string;
  disabled?: boolean;
}

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ fontColor }) => fontColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
  background-color: ${({ color, buttonType }) => {
    if (buttonType) {
      switch (buttonType) {
        case "SUBMIT":
          return "#89cffd";
        default:
          return "#ffd400";
      }
    }
    return color;
  }};
`;
