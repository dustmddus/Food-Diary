import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Continer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  background-color: white;
  border-bottom: 1px solid #f2f2f2;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  gap: 10px;
  margin-left: 60px;
`;

export const NavItem = styled(Link)`
  padding: 12px 10px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 600;
`;
