import React from 'react';
import MdInfo from 'react-icons/lib/fa/cubes';

import { Container, Content, PlaceHolder } from 'components/layout';
import { H1, P } from 'components/text';
import { Posts } from 'components/blog';

const BlogPage = ({ data: { allMarkdownRemark } }) => (
  <Content>
    <Container>
      <H1 center>My Blog</H1>
      {allMarkdownRemark && allMarkdownRemark.edges.length > 0 ? (
        <Posts posts={allMarkdownRemark.edges} />
      ) : (
        <PlaceHolder>
          <MdInfo size={100} />
          <P>Sorry no posts are present, check back later.</P>
        </PlaceHolder>
      )}
    </Container>
  </Content>
);

export default BlogPage;

export const BlogQuery = graphql`
  query BlogQuery {
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
