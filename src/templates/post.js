import React from 'react';

import { Container, Content } from 'components/layout';
import { H1, HR } from 'components/text';
import { PostDate, PostDetail } from 'components/blog';

const BlogPost = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Content>
    <Container>
      <H1 center>{frontmatter.title}</H1>
      <PostDate date={frontmatter.date} center />
      <HR />
      <PostDetail dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  </Content>
);

export default BlogPost;

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      excerpt(pruneLength: 150)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
