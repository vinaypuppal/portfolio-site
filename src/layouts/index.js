import React from 'react';
import { injectGlobal } from 'react-emotion';

/* eslint-disable */
import normalize from 'normalize.css';
injectGlobal`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont,
             'avenir next', avenir,
             'helvetica neue', helvetica,
             ubuntu,
             roboto, noto,
             'segoe ui', arial,
             sans-serif;
  };
`;
/* eslint-enable */

const Layout = ({ children }) => <div>{children()}</div>;

export default Layout;
