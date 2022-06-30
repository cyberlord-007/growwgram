import React from 'react';
import { NavLogo, NavWrapper, ThemeToggle, Nav } from './NavbarStyles';
import { FaMoon } from 'react-icons/fa';
import { MdWbSunny } from 'react-icons/md';

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <>
      <Nav>
        <NavWrapper>
          <NavLogo>PixaGram</NavLogo>
          <ThemeToggle onClick={toggleTheme}>
            {isDark ? <MdWbSunny /> : <FaMoon />}
          </ThemeToggle>
        </NavWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
