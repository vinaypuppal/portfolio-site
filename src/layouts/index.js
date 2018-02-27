import React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import { withPrefix } from 'gatsby-link';

import Header from '../components/header';

/* eslint-disable */
import normalize from 'normalize.css';
injectGlobal`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont,
             'avenir next', avenir,
             'helvetica neue', helvetica,
             ubuntu,
             roboto, noto,
             'segoe ui', arial,
             sans-serif;
  };
  body {
    width: 100%;
    min-height: 100vh;
    position: relative;
    letter-spacing: 2px;
    line-height: 1.35;
    background: rgba(0,127,225,.60);
    background: linear-gradient(
      rgba(0,127,225,.60), 
      rgba(0,127,225,.60)
    ), url('https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1464896760/photo-1428223501723-d821c5d00ca3_knl5ki.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #fff;
    margin: 0;
    overflow: hidden;
  }
`;
/* eslint-enable */

const Layout = styled.div`
  width: 100%;
`;

const LayoutComponent = ({ children, location, data: { site: { siteMetadata } } }) => {
  const isHomepage = location.pathname === withPrefix('/');

  return (
    <Layout>
      <Header isHomepage={isHomepage} {...siteMetadata} />
      {children()}
    </Layout>
  );
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        socialLinks {
          facebook
          twitter
          linkedin
          codepen
          fcc
          github
          medium
        }
        navigationLinks {
          aboutMe
          myWorks
          myBlog
        }
      }
    }
  }
`;

export default LayoutComponent;
