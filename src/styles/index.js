import { injectGlobal } from 'react-emotion';

import colors from 'styles/colors';

/* eslint-disable */
injectGlobal`
  *,
  *:before,
  *:after{
    box-sizing: border-box;
    font-family: Avenir,'Segoe UI',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif
  }
  html {
    height: 100%;
    overflow: auto;
  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    position: relative;
    letter-spacing: 2px;
    line-height: 1.35;
    background: #000;
    background-image: ${colors.gradient};
    background-repeat: no-repeat;
    color: #fff;
  }
  ::selection {
    background: ${colors.select}
  }
`;
/* eslint-enable */
