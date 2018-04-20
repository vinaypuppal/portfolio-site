import React from 'react';
import styled from 'react-emotion';

import 'styles'; // global styles
import Head from 'components/head';
import Header from 'components/header';

const LayoutComponent = ({ children, data }) => {
  const {
    allContentYaml: {
      edges: [edge],
    },
  } = data;
  const {
    logo,
    pages,
    title,
    avatar,
    twitter,
    fbAppId,
    siteUrl,
    subtitle,
    themeColor,
    description,
    socialLinks,
  } = edge.node;
  const meta = {
    title,
    image: avatar.publicURL,
    twitter,
    fbAppId,
    siteUrl,
    subtitle,
    themeColor,
    description,
  };
  return (
    <Layout>
      <Head meta={meta} />
      <Header
        logo={{ resolutions: logo.childImageSharp.resolutions, title }}
        pages={pages}
        socialLinks={socialLinks}
      />
      {children()}
    </Layout>
  );
};

export default LayoutComponent;

export const query = graphql`
  query LayoutQuery {
    allContentYaml {
      edges {
        node {
          title
          subtitle
          description
          themeColor
          siteUrl
          twitter
          fbAppId
          logo {
            childImageSharp {
              resolutions(width: 232, height: 44) {
                ...GatsbyImageSharpResolutions_withWebp_tracedSVG
              }
            }
          }
          avatar {
            publicURL
          }
          socialLinks {
            name
            url
          }
          pages {
            name
            path
          }
        }
      }
    }
  }
`;

const Layout = styled('div')`
  position: relative;
  width: 100%;
`;
