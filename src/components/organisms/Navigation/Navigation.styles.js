import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1/3;
  grid-column: 1/1;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    text-align: right;
    margin-right: 0.7em;
  }
`;

export const LogoTitle = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  text-align: right;
  margin: 15px 20px 15px auto;
  color: ${({ theme }) => theme.colors.darkGrey};
  transition: color 0.25s;
  position: relative;

  &::after {
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    content: "";
    position: absolute;
    width: 18px;
    height: 2px;
    top: 50%;
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    transform: translateY(-50%);
  }

  &.active::after {
    opacity: 1;
  }
`;
