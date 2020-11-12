import styled, { css } from 'styled-components';

interface INavbar {
  fixedNavBar: boolean;
}

export const Nav = styled.nav<INavbar>`
  @keyframes navBarAppearFromTop {
    from {
      top: -100px;
    }

    to {
      top: 0;
    }
  }

  position: absolute;
  transition: all 0.2s ease-out;

  ${({ fixedNavBar }) =>
    fixedNavBar &&
    css`
      animation: navBarAppearFromTop 0.5s;
      position: fixed;
    `}

  z-index: 10;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.09);
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: 90px;
  max-width: 1200px;
`;

export const Logo = styled.svg`
  width: auto;
  height: 36px;
`;

export const Menu = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: auto;
  margin: 0 2rem;
`;

export const MenuContainer = styled.div`
  display: flex;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const MenuRight = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin-right: 2rem;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-shrink: 0;

  align-items: center;
  justify-content: center;

  width: auto;
  height: auto;

  border-radius: 2rem;
  padding: 0.6rem 1rem;

  background: transparent;

  border: 1px solid #554d89;

  cursor: pointer;

  transition: all 0.2s ease;

  a {
    font-size: 0.9rem;
    text-decoration: none;
    color: #554d89;
  }

  &:hover {
    background: #554d89;
    border: 1px solid #554d89;

    a {
      color: #fff;
    }
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  display: flex;
  align-items: center;

  height: auto;

  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  text-decoration: none;

  margin-left: 2rem;

  color: #554d89;

  &:hover {
    border-bottom: 3px solid #333;
  }
`;

export const MenuMobile = styled.button`
  cursor: pointer;
  background: none;
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
