import React from 'react';
import styled, { css } from 'styled-components';

const HamburgerWrapper = styled.button`
  padding: 10px;
  border: 0;
  outline: none;
  position: fixed;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 25px;
  background-color: transparent;
  z-index: ${({ theme }) => theme.zIndex.level10};

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

const HamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ isActive, theme }) => (isActive ? 'transparent' : theme.black)};
  transition: background-color 0.2s ease;

  ::before,
  ::after {
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    content: '';
    background-color: ${({ isActive, theme }) => (isActive ? theme.white : theme.black)};
    transition: transform 0.2s ease, background-color 0.2s ease;
  }

  ::before {
    top: -10px;

    ${({ isActive }) =>
      isActive &&
      css`
        transform: translateY(10px) rotate(45deg);
      `}
  }

  ::after {
    top: 10px;

    ${({ isActive }) =>
      isActive &&
      css`
        transform: translateY(-10px) rotate(-45deg);
      `}
  }
`;

const Hamburger = ({ onClick, isActive }) => (
  <HamburgerWrapper onClick={onClick}>
    <HamburgerInner isActive={isActive} />
  </HamburgerWrapper>
);

export default Hamburger;
