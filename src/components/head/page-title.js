import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta itemProp="name" content={title} />
    <meta property="og:site_name" content={title} />
    <meta name="twitter:title" content={title} />
  </Helmet>
);

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
