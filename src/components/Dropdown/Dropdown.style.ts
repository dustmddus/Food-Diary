import styled from "@emotion/styled";

interface Props {
  width?: string;
  height?: string;
  borderRadius?: string;
  fontSize?: string;
}

export const Container = styled.form``;

export const Select = styled.select<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  text-align: center;
  font-size: ${({ fontSize }) => fontSize};
`;

export const Option = styled.option`
  &:disabled {
    display: none;
  }
`;
