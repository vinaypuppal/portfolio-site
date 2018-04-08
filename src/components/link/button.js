import React from 'react';
import PropTypes from 'prop-types';
import NativeLink from 'gatsby-link';
import styled, { css } from 'react-emotion';
import FaExternal from 'react-icons/lib/fa/external-link';

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

export const buttonLink = css`
  text-decoration: none;
  display: inline-block;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: #fff;
  box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12),
    0 10px 36px -4px rgba(152, 152, 152, 0.3);
  background: linear-gradient(to top, #000000, #434343);
  letter-spacing: 0.5px;
  border: none;
  width: 200px;
  transition: all 0.2s ease-in-out;
  font-family: inherit;
  &:hover {
    opacity: 0.8;
    box-shadow: 0 10px 15px -1px rgba(0, 0, 0, 0.1),
      0 25px 50px -4px rgba(238, 238, 238, 0.3);
  }
`;

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
