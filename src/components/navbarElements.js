import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  font-family: courier new;
`;

export const NavLink = styled(Link)`
  color: green;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: courier new;
  font-weight: bold;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;
