import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Continer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const UserButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border: none;
  background-color: #ffd400;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
