import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Hamburger from 'components/Hamburger/Hamburger';

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Logo = styled.span`
  font-weight: ${({ theme }) => theme.font.style.black};
  font-size: ${({ theme }) => theme.font.size.paragraph};
`;

const NavigationList = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  transform: translateX(${({ isActive }) => (isActive ? '0' : '-100%')});
  transition: transform 0.2s ease-in-out;
`;

const NavigationListItem = styled.li`
  font-weight: ${({ theme }) => theme.font.style.semiBold};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  margin: 5px 0;
`;

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <NavigationWrapper>
      <Logo>
        <Link to="/">HATTA</Link>
      </Logo>
      <Hamburger onClick={handleClick} isActive={isActive} />
      <NavigationList isActive={isActive}>
        <NavigationListItem>
          <Link to="/about">about</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/articles">articles</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/gallery">gallery</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/contact">contact</Link>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
