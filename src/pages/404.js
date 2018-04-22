import React from 'react';
import Link from 'gatsby-link';
import MdInfo from 'react-icons/lib/fa/bullhorn';
import PageTitle from 'components/head/page-title';

import { Container, Content, PlaceHolder } from 'components/layout';
import { H1 } from 'components/text';

const NotFoundPage = () => (
  <Content>
    <Container>
      <PageTitle title="Page Not Found | vinaypuppal.com" />
      <PlaceHolder>
        <MdInfo size={100} />
        <H1>404 | Page Not Found</H1>
        <Link to="/">Go Back Home</Link>
      </PlaceHolder>
    </Container>
  </Content>
);

export default NotFoundPage;
