import React from 'react';
import PropTypes from 'prop-types';
import NativeLink from 'gatsby-link';
import styled from 'react-emotion';
import FaExternal from 'react-icons/lib/fa/external-link';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { buttonLink, outlineButtonLink } from './css';

export const InternalButtonLink = ({ href, children, ...restProps }) => (
  <StyledNativeButtonLink to={href} {...restProps}>
    {children}
  </StyledNativeButtonLink>
);

InternalButtonLink.propTypes = {
  /** Specify the URL of the page the link goes to */
  href: PropTypes.string,
  outline: PropTypes.bool,
};

InternalButtonLink.defaultProps = {
  href: '#',
  outline: false,
};

export const ExternalButtonLink = ({ href, children, ...restProps }) => (
  <StyledExternalButtonLink
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    {...restProps}
  >
    <span>{children}</span>
    <FaExternal size={12} />
  </StyledExternalButtonLink>
);

ExternalButtonLink.propTypes = {
  /** Specify the URL of the page the link goes to */
  href: PropTypes.string,
  outline: PropTypes.bool,
};

ExternalButtonLink.defaultProps = {
  href: '#',
  outline: false,
};

const GenericButtonLink = props => {
  const { href } = props;
  if (href.startsWith('/')) {
    return <InternalButtonLink {...props} />;
  }
  return <ExternalButtonLink {...props} />;
};

export default GenericButtonLink;

GenericButtonLink.propTypes = {
  /** Specify the URL of the page the link goes to */
  href: PropTypes.string,
  outline: PropTypes.bool,
};

GenericButtonLink.defaultProps = {
  href: '#',
  outline: false,
};

const StyledNativeButtonLink = styled(NativeLink)`
  ${props => (props.outline ? outlineButtonLink : buttonLink)};
`;

const StyledExternalButtonLink = styled(OutboundLink)`
  ${props => (props.outline ? outlineButtonLink : buttonLink)};
  & span {
    display: inline-block;
    margin-right: 10px;
  }
`;
