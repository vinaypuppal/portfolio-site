import React from 'react';

import { Content } from 'components/layout';
import { H1, HR } from 'components/text';
import { PostDate, PostDetail } from 'components/blog';
import PageTitle from 'components/head/page-title';
import PageDescription from 'components/head/page-description';

const BlogPost = ({
  data: {
    markdownRemark: { frontmatter, html, excerpt },
  },
}) => (
  <Content>
    <PageTitle title={frontmatter.title} />
    <PageDescription description={excerpt} />
    <H1 center>{frontmatter.title}</H1>
    <PostDate date={frontmatter.date} center />
    <HR />
    <PostDetail dangerouslySetInnerHTML={{ __html: html }} />
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
      excerpt(pruneLength: 100)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
