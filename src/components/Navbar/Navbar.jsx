import React from 'react';
import { NavLogo, NavWrapper, ThemeToggle } from './NavbarStyles';
import {FaMoon} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <NavLogo>GrowwGram</NavLogo>
        <ThemeToggle>
            <FaMoon />
        </ThemeToggle>
      </NavWrapper>
    </>
  );
};

export default Navbar;
