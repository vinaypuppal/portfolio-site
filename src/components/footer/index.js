import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { p } from 'components/text/css';

const FooterComponent = ({ title, inverted }) => (
  <Footer inverted={inverted}>
    <Text>
      {title} &copy; 2016 - {new Date().getFullYear()} |{' '}
    </Text>
    <Text>
      <FooterLink
        inverted={inverted}
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/vinaypuppal/vinaypuppal.github.io"
      >
        Source
      </FooterLink>{' '}
      |{' '}
      <FooterLink
        inverted={inverted}
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/vinaypuppal/vinaypuppal.github.io"
      >
        Credits
      </FooterLink>
    </Text>
  </Footer>
);

export default FooterComponent;

FooterComponent.propTypes = {
  title: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
};

FooterComponent.defaultProps = {
  inverted: false,
};

const Footer = styled('footer')`
  position: ${props => (props.inverted ? 'relative' : 'absolute')};
  bottom: 0;
  width: 100%;
  left: 0;
  background: transparent;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.inverted ? '#999' : '#888')};
  @media (max-width: 440px) {
    flex-direction: column;
    height: 60px;
    margin-bottom: 15px;
  }
`;

const Text = styled('p')`
  ${p};
  font-size: 1rem;
  margin: 0 5px;
  color: inherit;
  font-weight: 300;
`;

const FooterLink = styled(OutboundLink)`
  color: inherit;
  font-size: inherit;
  font-weight: 400;
  text-decoration: none;
  user-select: none;
  &:hover {
    color: ${props => (props.inverted ? '#000' : '#fff')};
  }
`;
