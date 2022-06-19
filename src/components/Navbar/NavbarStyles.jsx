import styled from 'styled-components';

export const Nav = styled.nav`
  height: 86px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  opacity: 1;
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 80px;
  color: ${({ theme }) => theme.text};
  padding: 10px 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 30%) 5px 5px 10px, #f48fb1 -5px -5px 10px 10px;
  background: ${({ theme }) => theme.navbg};
  z-index: 1000;
  opacity: 1;

  @media screen and (max-width: 480px) {
    padding: 5px 10px;
  }
`;

export const NavLogo = styled.h1`
  font-size: 44px;
  font-family: 'Courgette', cursive;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const ThemeToggle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -15px -15px 15px rgba(114, 112, 112, 0.2),
    15px 15px 15px rgba(0, 0, 0, 0.15);
  font-size: 25px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;
