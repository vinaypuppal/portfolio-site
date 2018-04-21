import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { Container } from 'components/layout';
import Logo from 'components/logo';
import Nav from 'components/nav';
import SocialNetworks from 'components/social-networks';

const HeaderComponent = ({ logo, pages, socialLinks }) => (
  <Container>
    <Header>
      <Logo logo={logo} />
      <Nav pages={pages} />
      <SocialNetworks networks={socialLinks} />
    </Header>
  </Container>
);

export default HeaderComponent;

HeaderComponent.propTypes = {
  /** GatsbyJs ImageSharp Resolutions */
  logo: PropTypes.shape({
    resolutions: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })
  ).isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
  ).isRequired,
};

const Header = styled('header')`
  padding: 20px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;
