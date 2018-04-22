import React from 'react';
import styled from 'react-emotion';

import { formatDate } from 'utils';

const PostDateComponent = ({ date, center }) => (
  <PostDate center={center}>{formatDate(date)}</PostDate>
);

export default PostDateComponent;

const PostDate = styled.div`
  color: #999;
  font-size: 14px;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
