import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';

import { toCapitalizedWords } from '../../utils';
import Icon from '../icon';

const HeroNav = ({ pages, ...restProps }) => (
  <Nav {...restProps}>
    <NavList>
      {pages.map(page => (
        <NavItem key={page.name}>
          <NavLink to={page.path}>
            <Icon name={page.icon} size={70} />
            <span>{toCapitalizedWords(page.name)}</span>
          </NavLink>
        </NavItem>
      ))}
    </NavList>
  </Nav>
);

export default HeroNav;

HeroNav.propTypes = {
  pages: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
};

const Nav = styled('nav')`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 900px) {
      width: 70%;
    }
    @media (max-width: 780px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 90%;
    }
    @media (max-width: 480px) {
      width: 100%;
      & a span {
        font-size: 16px;
        font-weight: 400;
      }
    }
    @media (max-width: 400px) {
      width: 100%;
      & svg {
        width: 50px;
        height: 50px;
      }
    }
    @media (max-width: 375) {
      & a span {
        font-size: 14px;
      }
    }
    @media (max-width: 667px) and (max-height: 375px) {
      margin-top: 0;
      & svg {
        width: 50px;
        height: 50px;
      }
      & a span {
        font-size: 14px;
      }
    }
    @media (max-width: 568px) and (max-height: 320px) {
      margin-top: -80px;
    }
  }
  @media (max-width: 600px) {
    height: calc(100vh - 156px);
  }
  @media (max-width: 350px) {
    height: calc(100vh - 226px);
  }
`;

const NavList = styled('ul')`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

const NavItem = styled('li')`
  flex: 1;
  font-size: 70px;
`;

const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #999;
  user-select: none;
  font-weight: 300;
  line-height: 0;
  &:hover {
    color: #fff;
  }
  & span {
    font-size: 18px;
    line-height: 36px;
    display: block;
  }
`;
