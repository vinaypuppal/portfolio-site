import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { p } from 'components/text/css';

const FooterComponent = ({ title }) => (
  <Footer>
    <Text>
      {title} &copy; 2016 - {new Date().getFullYear()}
    </Text>
  </Footer>
);

export default FooterComponent;

FooterComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

const Footer = styled('footer')`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled('p')`
  ${p};
  margin: 0;
  color: #999;
  font-weight: 300;
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
