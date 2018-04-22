import React from 'react';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link';
import MdInfo from 'react-icons/lib/fa/bullhorn';

import { Container, Content, PlaceHolder } from 'components/layout';
import { H1 } from 'components/text';

const title = 'Page Not Found | vinaypuppal.com';

const NotFoundPage = () => (
  <Content>
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta property="og:site_name" content={title} />
        <meta name="twitter:title" content={title} />
        <meta itemProp="name" content={title} />
      </Helmet>
      <PlaceHolder>
        <MdInfo size={100} />
        <H1>404 | Page Not Found</H1>
        <Link to="/">Go Back Home</Link>
      </PlaceHolder>
    </Container>
  </Content>
);

export default NotFoundPage;
