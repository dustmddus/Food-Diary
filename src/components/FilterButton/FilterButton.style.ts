import styled from "@emotion/styled";

export interface StyleProps {
  active?: boolean;
}

export const FilterButton = styled.button<StyleProps>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 20px;
  border: none;
  background-color: ${({ active }) => (active ? "#FFD400" : "#D9D9D9")};
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #ffd400;
  }
`;
