import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';

import { H2, P } from 'components/text';
import PostDate from './post-date';

const PostComponent = ({ post }) => (
  <PostContainer>
    <Post>
      <PostDate date={post.frontmatter.date} />
      <PostTitle>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </PostTitle>
      <PostSummary>{post.excerpt}</PostSummary>
      <ReadMore>
        <Link to={post.fields.slug}>Read More</Link>
      </ReadMore>
    </Post>
  </PostContainer>
);

export default PostComponent;

PostComponent.propTypes = {
  post: PropTypes.shape({
    timeToRead: PropTypes.number.isRequired,
    excerpt: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const PostContainer = styled.li`
  border-bottom: 1px solid rgb(234, 234, 234);
  padding: 30px 0px 20px;
  transition: background 200ms ease 0s;
  &:first-of-type {
    border-top: 1px solid rgb(234, 234, 234);
  }
  &:hover {
    background: #fafafa;
  }
`;

const Post = styled.div`
  max-width: 650px;
  margin: auto;
`;

const PostTitle = styled(H2)`
  & > a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostSummary = styled(P)`
  margin-bottom: 20px;
  line-height: 24px;
`;

const ReadMore = styled(P)`
  font-size: 12px;
  line-height: 24px;
  margin: 0;
  & > a {
    color: #000;
    text-transform: uppercase;
    &:hover {
      text-shadow: 0.8px 0px 0px #222;
    }
  }
`;
