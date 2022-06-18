import styled from 'styled-components';

export const NavWrapper = styled.div`
  height: 80px;
  color: #000;
  padding: 10px 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 30%) 5px 5px 10px, #f48fb1 -5px -5px 10px 10px;
  background: rgba(136, 130, 130, 0.2);

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

  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;
