import React from 'react';
import { Helmet } from 'react-helmet';

import PageContent from '../components/PageContent';

const BlogPage = ({ transition }) => (
  <PageContent style={transition && transition.style}>
    <Helmet>
      <title>My Blog | VinayPuppal.com</title>
    </Helmet>
    <h1>Coming Soon!...</h1>
  </PageContent>
);

export default BlogPage;
