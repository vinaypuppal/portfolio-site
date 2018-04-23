import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withPrefix } from 'gatsby-link';

import { Container } from 'components/layout';
import Logo from 'components/logo';
import Nav from 'components/nav';
import SocialNetworks from 'components/social-networks';
import Icon from 'components/icon';

const HeaderComponent = ({
  logo,
  pages,
  location: { pathname },
  history: { goBack },
  socialLinks,
}) => {
  const isHomePage = pathname === withPrefix('/');
  return (
    <Container>
      <Header>
        {!isHomePage && (
          <BackButton onClick={goBack}>
            <Icon name="back" size={30} />
          </BackButton>
        )}
        <Logo logo={logo} />
        {!isHomePage && <Nav pages={pages} />}
        <SocialNetworks isHomePage={isHomePage} networks={socialLinks} />
      </Header>
    </Container>
  );
};

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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
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

const BackButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  position: absolute;
  top: 15px;
  left: 15px;
  color: #fff;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
