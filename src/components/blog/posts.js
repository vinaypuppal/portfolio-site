import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Post from './post';

const PostsComponent = ({ posts }) => (
  <Posts>
    {posts
      .filter(post => !!post.node.frontmatter.date)
      .map(post => <Post key={post.node.id} post={post.node} />)}
  </Posts>
);

export default PostsComponent;

PostsComponent.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.object.isRequired,
    })
  ).isRequired,
};

const Posts = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
