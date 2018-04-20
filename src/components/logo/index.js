import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const LogoComponent = ({ logo }) => (
  <Logo>
    <Link aria-label="logo with link to index page" to="/">
      <Img resolutions={logo.resolutions} alt={logo.title} />
      <span>{logo.title}</span>
    </Link>
  </Logo>
);

export default LogoComponent;

LogoComponent.propTypes = {
  /** GatsbyJs ImageSharp Resolutions */
  logo: PropTypes.shape({
    resolutions: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const Logo = styled('h3')`
  line-height: 0px;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  width: 232px;
  height: 46px;
  & a {
    font-weight: 300;
    text-decoration: none;
    color: '#fff';
    font-size: 32px;
    position: relative;
    & span {
      position: absolute;
      top: 50%;
      transfrom: translateY(-50%);
      left: 0;
      opacity: 0;
    }
  }
`;
