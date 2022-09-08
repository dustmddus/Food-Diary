import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
  size?: string;
  color?: string;
  weight?: string | number;
}

export const Text = styled.div`
  font-size: ${({ size }: Props) => size};
  font-weight: ${({ weight }: Props) => weight};
  color: ${({ color }: Props) => color};
  font-family: "Noto Sans KR", sans-serif;
  line-height: 1.4;
  cursor: pointer;
`;
