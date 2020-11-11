import styled, { css } from 'styled-components';

interface IModalProps {
  isOpen: boolean;
}

export const Modal = styled.div`
  display: absolute;
  z-index: 999;
`;

export const Menu = styled.div<IModalProps>`
  display: flex;
  flex-direction: column;

  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);

  position: fixed;
  z-index: 999;

  height: 100%;
  width: 25rem;

  backdrop-filter: blur(0px);
  right: -25rem;
  transition: ease 0.4s;

  ${(props) =>
    props.isOpen &&
    css`
      backdrop-filter: blur(15px);
      right: 0;
    `}
`;

export const MenuItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  justify-content: center;
  align-items: center;

  height: auto;
`;

export const MenuItem = styled.a`
  display: flex;
  justify-content: start;
  font-size: 2.8rem;
  margin: 1rem 0 0 0;
  text-decoration: none;
  text-align: left;
  color: #554d89;
`;

export const CloseButton = styled.button`
  display: flex;

  height: 3rem;
  width: 3rem;

  position: absolute;
  right: 0;
  top: 0;

  margin: 2rem 2rem 0 0;
  background: none;
`;
