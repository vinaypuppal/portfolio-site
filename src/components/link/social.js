import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import colors from 'styles/colors';
import Icon from '../icon';
import Tooltip from '../tooltip';

const SocialLink = ({ network, href, iconSize, ...restProps }) => (
  <Tooltip title={`Follow on ${network}`} arrow>
    <StyledSocialLink
      network={network}
      href={href}
      title={`Follow on ${network}`}
      {...restProps}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow me on ${network}`}
    >
      <Icon name={network} size={iconSize} />
    </StyledSocialLink>
  </Tooltip>
);

export default SocialLink;

SocialLink.propTypes = {
  /** Social network profile URL */
  href: PropTypes.string,
  /** Container width */
  width: PropTypes.number,
  /** Container height */
  height: PropTypes.number,
  /** Social network name eg. facebook or twitter */
  network: PropTypes.string.isRequired,
  /** Container should be rounded or not */
  circular: PropTypes.bool,
  /** Social icon size i.e width and height */
  iconSize: PropTypes.number,
};

SocialLink.defaultProps = {
  href: '#',
  width: 30,
  height: 30,
  circular: false,
  iconSize: 20,
};

const iconBg = network => css`
  background: ${colors.social[network]};
  color: #fff;
  border-color: #fbfbfb;
`;

const StyledSocialLink = styled('a')`
  display: flex;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  justify-content: center;
  align-items: center;
  background: transparent;
  color: inherit;
  border: 1px solid;
  transition: all 0.25s ease-in-out;
  border-radius: ${props => (props.circular ? '50%' : 0)};
  &:hover {
    ${props => iconBg(props.network)};
  }
`;
