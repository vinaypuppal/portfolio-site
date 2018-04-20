import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';

import { toCapitalizedWords } from '../../utils';

const MainNav = ({ pages, ...restProps }) => (
  <Nav {...restProps}>
    <NavList>
      {pages.map(page => (
        <NavItem key={page.name}>
          <NavLink to={page.path}>{toCapitalizedWords(page.name)}</NavLink>
        </NavItem>
      ))}
    </NavList>
  </Nav>
);

export default MainNav;

MainNav.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
};

const Nav = styled('nav')`
  flex: 2;
  @media (max-width: 600px) {
    display: none;
  }
`;

const NavList = styled('ul')`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`;

const NavItem = styled('li')`
  position: relative;
`;

const NavLink = styled(Link)`
  line-height: 30px;
  font-weight: 400;
  transition: all 0.25s ease-in;
  text-decoration: none;
  color: #999;
  position: relative;
  user-select: none;
  &:hover {
    color: #fff;
  }
  &.active {
    color: #fff;
    pointer-events: none;
    &:after {
      position: absolute;
      content: '';
      width: 120%;
      left: 50%;
      bottom: -18px;
      transform: translateX(-50%);
      height: 4px;
      background: #fff;
    }
  }
`;
