import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Layout;

const HeaderStyled = styled.header`
  display: flex;
  padding: 20px;
  gap: 40px;
  font-size: x-large;
  border-bottom: solid 2px black;
  font-weight: 700;
`;
export const NavLinkStyled = styled(NavLink)`
  color: black;
  position: relative;
  text-decoration: none;

  &.active {
    color: lightseagreen;
  }
  &:hover:not(.active) {
    color: lightseagreen;
    &::after {
      transform: scale(1);
    }
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: currentColor;
  }
`;
