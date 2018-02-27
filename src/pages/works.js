import React from 'react';
import { Helmet } from 'react-helmet';

import PageContent from '../components/PageContent';

const WorksPage = ({ transition }) => (
  <PageContent style={transition && transition.style}>
    <Helmet>
      <title>My Works | VinayPuppal.com</title>
    </Helmet>Works Page
  </PageContent>
);

export default WorksPage;
