import React from 'react';
import PropTypes from 'prop-types';
import NativeLink from 'gatsby-link';
import styled from 'react-emotion';
import FaExternal from 'react-icons/lib/fa/external-link';

import { buttonLink } from './css';

export const InternalButtonLink = ({ href, children, ...restProps }) => (
  <StyledNativeButtonLink to={href} {...restProps}>
    {children}
  </StyledNativeButtonLink>
);

InternalButtonLink.propTypes = {
  /** Specify the URL of the page the link goes to */
  href: PropTypes.string,
};

InternalButtonLink.defaultProps = {
  href: '#',
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
};

ExternalButtonLink.defaultProps = {
  href: '#',
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
};

GenericButtonLink.defaultProps = {
  href: '#',
};

const StyledNativeButtonLink = styled(NativeLink)`
  ${buttonLink};
`;

const StyledExternalButtonLink = styled('a')`
  ${buttonLink};
  & span {
    display: inline-block;
    margin-right: 10px;
  }
`;
