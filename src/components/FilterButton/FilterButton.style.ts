import styled from "@emotion/styled";

export interface StyleProps {
  active?: boolean;
}

export const FilterButton = styled.button<StyleProps>`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 20px;
  border: none;
  background-color: ${({ active }) => (active ? "#FFD400" : "#D9D9D9")};
  text-align: center;
  font-size: 17px;
`;
