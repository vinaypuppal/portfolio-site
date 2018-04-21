import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Link from 'components/link';

const SocialComponent = ({ networks }) => (
  <SocialNetworks>
    {networks.map(network => (
      <SocialNetwork key={network.name}>
        <Link.Social network={network.name} href={network.url} circular />
      </SocialNetwork>
    ))}
  </SocialNetworks>
);

export default SocialComponent;

SocialComponent.propTypes = {
  networks: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
  ).isRequired,
};

const SocialNetworks = styled('ul')`
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  @media (max-width: 600px) {
    margin: 30px;
    justify-content: center;
  }
  @media (max-width: 350px) {
    flex-wrap: wrap;
  }
`;

const SocialNetwork = styled('li')`
  margin: 0 10px;
  @media (max-width: 350px) {
    margin: 10px;
  }
`;
