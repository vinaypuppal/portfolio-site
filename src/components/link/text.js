import React from 'react';
import PropTypes from 'prop-types';
import NativeLink from 'gatsby-link';
import styled, { css } from 'react-emotion';
import FaExternal from 'react-icons/lib/fa/external-link';

export const InternalLink = ({ href, children, ...restProps }) => (
  <StyledNativeLink to={href} {...restProps}>
    {children}
  </StyledNativeLink>
);

InternalLink.propTypes = {
  /** Specify the URL of the page the link goes to */
  href: PropTypes.string,
};

InternalLink.defaultProps = {
  href: '#',
};

export const AnchorLink = ({ href, children, ...restProps }) => (
  <StyledAnchorLink href={href} {...restProps}>
    {children}
  </StyledAnchorLink>
);

AnchorLink.propTypes = {
  /** Specify the URL of the page the link goes to */
  href: PropTypes.string,
};

AnchorLink.defaultProps = {
  href: '#',
};

export const ExternalLink = ({ href, children, ...restProps }) => (
  <StyledExternalLink
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    {...restProps}
  >
    <span>{children}</span>
    <FaExternal size={12} />
  </StyledExternalLink>
);

ExternalLink.propTypes = {
  /** Specify the URL of the page the link goes to */
  href: PropTypes.string,
};

ExternalLink.defaultProps = {
  href: '#',
};

const GenericLink = props => {
  const { href } = props;
  if (href.startsWith('/')) {
    return <InternalLink {...props} />;
  }
  if (href.includes('@') || href.startsWith('#')) {
    return <AnchorLink {...props} />;
  }
  return <ExternalLink {...props} />;
};

GenericLink.propTypes = {
  /** Specify the URL of the page the link goes to */
  href: PropTypes.string,
};

GenericLink.defaultProps = {
  href: '#',
};

export default GenericLink;

export const link = css`
  color: inherit;
  font-size: inherit;
  font-weight: 600;
  text-decoration: none;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid #ccc;
  box-shadow: inset 0 -2px 0px 0px #ccc;
  &.gatsby-resp-image-link {
    box-shadow: none;
    border-bottom: transparent;
  }
  &:hover {
    background: #ccc;
  }
`;

const StyledNativeLink = styled(NativeLink)`
  ${link};
`;

const StyledAnchorLink = styled('a')`
  text-decoration: none;
  color: #067df7;
  font-size: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledExternalLink = styled('a')`
  ${link};
  & span {
    display: inline-block;
    margin-right: 4px;
  }
`;
