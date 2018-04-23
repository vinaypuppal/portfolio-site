import React from 'react';
import Link from 'gatsby-link';

import PageTitle from 'components/head/page-title';
import Icon from 'components/icon';

import { Container, Content, PlaceHolder } from 'components/layout';
import { H1 } from 'components/text';

const NotFoundPage = () => (
  <Content>
    <Container>
      <PageTitle title="Page Not Found | vinaypuppal.com" />
      <PlaceHolder>
        <Icon name="horn" size={100} />
        <H1 center>404 | Page Not Found</H1>
        <Link to="/">Go Back Home</Link>
      </PlaceHolder>
    </Container>
  </Content>
);

export default NotFoundPage;
