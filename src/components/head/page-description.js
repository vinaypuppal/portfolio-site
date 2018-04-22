import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PageDescription = ({ description }) => (
  <Helmet>
    <meta name="description" content={description} />
    <meta itemProp="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);

export default PageDescription;

PageDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
