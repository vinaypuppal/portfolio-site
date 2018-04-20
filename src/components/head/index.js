import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Head = ({ meta }) => (
  <Helmet>
    <html lang="en" />
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0 user-scalable=no"
    />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <link
      rel="mask-icon"
      href="/favicons/safari-pinned-tab.svg"
      color={meta.themeColor}
    />
    <link rel="shortcut icon" href="/favicons/favicon.ico" />
    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />

    <title>{`${meta.title} | ${meta.subtitle}`}</title>
    <meta name="description" content={meta.description} />
    <meta name="theme-color" content={meta.themeColor} />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={`${meta.title} | ${meta.subtitle}`} />
    <meta property="og:url" content={meta.siteUrl} />
    <meta itemProp="name" content={`${meta.title} | ${meta.subtitle}`} />
    <meta itemProp="description" content={meta.description} />
    <meta itemProp="image" content={meta.image} />
    <meta property="og:image" content={meta.image} />
    <meta
      property="og:site_name"
      content={`${meta.title} | ${meta.subtitle}`}
    />
    <meta property="og:description" content={meta.description} />
    <meta property="fb:app_id" content={meta.fbAppId} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={meta.twitter} />
    <meta name="twitter:title" content={`${meta.title} | ${meta.subtitle}`} />
    <meta name="twitter:description" content={meta.description} />
    <meta name="twitter:image:src" content={meta.image} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    fbAppId: PropTypes.string.isRequired,
    siteUrl: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    themeColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
