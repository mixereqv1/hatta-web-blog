import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
  display: flex;
  list-style: none;
`;

const NavigationListItem = styled.li`
  font-weight: ${({ theme }) => theme.font.style.semiBold};
  font-size: ${({ theme }) => theme.font.size.button};
  margin-left: 40px;
`;

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">HATTA</Link>
    </Logo>
    <NavigationList>
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

export default Navigation;
