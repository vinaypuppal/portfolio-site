import React, { Fragment } from 'react';

import { Content, PlaceHolder } from 'components/layout';
import { H1, P } from 'components/text';
import { Posts } from 'components/blog';
import PageTitle from 'components/head/page-title';
import Icon from 'components/icon';
import ShareButton from 'components/share-button';

const BlogPage = ({
  data: {
    allMarkdownRemark,
    allContentYaml: {
      edges: [edge],
    },
  },
  location: { pathname },
}) => (
  <Fragment>
    <ShareButton
      title="My Blog | VinayPuppal.com"
      text="Checkout:"
      url={window ? window.location.href : `${edge.node.siteUrl}${pathname}`}
    >
      <Icon name="share" />
    </ShareButton>
    <Content>
      <PageTitle title="My Blog | VinayPuppal.com" />
      <H1 center>My Blog</H1>
      {allMarkdownRemark && allMarkdownRemark.edges.length > 0 ? (
        <Posts posts={allMarkdownRemark.edges} />
      ) : (
        <PlaceHolder>
          <Icon name="cubes" size={100} />
          <P>Sorry no posts are present, check back later.</P>
        </PlaceHolder>
      )}
    </Content>
  </Fragment>
);

export default BlogPage;

export const BlogQuery = graphql`
  query BlogQuery {
    allContentYaml {
      edges {
        node {
          siteUrl
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { publish: { eq: true } } }
    ) {
      edges {
        node {
          id
          timeToRead
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`;
