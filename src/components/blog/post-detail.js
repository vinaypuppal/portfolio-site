import styled from 'react-emotion';

import colors from 'styles/colors';
import {
  h1,
  h2,
  h3,
  p,
  blockquote,
  ul,
  ol,
  li,
  inlineCode,
  pre,
  code,
} from 'components/text/css';
import { anchorLink } from 'components/link/css';

export default styled.div`
  max-width: 650px;
  margin: 50px auto 100px;
  ::selection {
    background: ${colors.select};
    color: #000;
  }
  & h1 {
    ${h1};
  }
  & h2 {
    ${h2};
  }
  & h3 {
    ${h3};
  }
  & p {
    ${p};
  }
  & a {
    ${anchorLink};
  }
  & ul {
    ${ul};
  }
  & ol {
    ${ol};
  }
  & li {
    ${li};
  }
  & blockquote {
    ${blockquote};
  }
  & code {
    ${inlineCode};
  }
  & pre {
    ${pre};
    & code {
      ${code};
      &:after {
        content: '';
      }
      &:before {
        content: '';
      }
    }
  }
  & .gatsby-resp-image-link {
    border-radius: 8px;
    border: 1px solid #e5e9f2;
  }
  /* Allow captions for images, when we have emphasized text directly below them */
  & .gatsby-resp-image-link + em {
    display: block;
    text-align: center;
    padding-top: 0.8rem;
    font-size: 0.9rem;
  }
`;
