import React from 'react';
import MdInfo from 'react-icons/lib/fa/cubes';

import { Container, Content, PlaceHolder } from 'components/layout';
import { H1, P } from 'components/text';

const BlogPage = () => (
  <Content>
    <Container>
      <H1 center>My Blog</H1>
      <PlaceHolder>
        <MdInfo size={100} />
        <P>Sorry no posts are present, check back later.</P>
      </PlaceHolder>
    </Container>
  </Content>
);

export default BlogPage;
