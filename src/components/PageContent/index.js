import React from 'react';
import styled from 'react-emotion';

const Content = styled.div`
  box-shadow: inset 0 10px 10px -10px rgba(0, 0, 0, 0.8);
  color: #888;
  background: #fff;
  width: 100%;
  height: calc(100vh - 62px);
`;

export default ({ children }) => <Content>{children}</Content>;
