import React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import { withPrefix } from 'gatsby-link';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no" />
        <title>VinayPuppal | Front End Developer</title>
        <meta description="Hi, I'm VinayPuppal. I focus on creating interactive websites that empower real people and simplifies their lives. Check out some of my recent projects or learn more about me." />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#65c9ff" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#65c9ff" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VinayPuppal" />
        <meta property="og:url" content="https://www.vinaypuppal.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/vinaypuppal/image/upload/v1511183636/my_avatar.png"
        />
        <meta property="og:site_name" content="VinayPuppal" />
        <meta
          property="og:description"
          content="Hi, I'm VinayPuppal. I focus on creating interactive websites that empower real people and simplifies their lives. Check out some of my recent projects or learn more about me."
        />
        <meta property="fb:app_id" content="1110213405717341" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vinaypuppal" />
        <meta name="twitter:title" content="VinayPuppal" />
        <meta
          name="twitter:description"
          content="Hi, I'm VinayPuppal. I focus on creating interactive websites that empower real people and simplifies their lives. Check out some of my recent projects or learn more about me."
        />
        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/vinaypuppal/image/upload/v1511183636/my_avatar.png"
        />
      </Helmet>
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
