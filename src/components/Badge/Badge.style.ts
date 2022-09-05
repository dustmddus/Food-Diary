import styled from "@emotion/styled";

interface Props {
  height?: string;
  width?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  fontColor?: string;
  BadgeType?: string;
}

export const Badge = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ BadgeType }) => {
    switch (BadgeType) {
      case "TEAM_MATCH" || "IN_GAME" || "END":
        return "#CCA9DD";
      case "INDIVIDUAL_MATCH":
        return "#A7ED4D";
      case "DISABLED":
        return "#7C7C7C";
      case "REFUSE":
        return "red";
      default:
        return "#FFD400";
    }
  }};
`;
