import React from 'react';
import { Helmet } from 'react-helmet';

import PageContent from '../components/PageContent';

const BlogPage = ({ transition }) => (
  <PageContent style={transition && transition.style}>
    <Helmet>
      <title>My Blog | VinayPuppal.com</title>
    </Helmet>Blog Page
  </PageContent>
);

export default BlogPage;
