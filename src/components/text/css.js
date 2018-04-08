import { css } from 'react-emotion';

export const h1 = css`
  font-weight: 200;
  font-size: 32px;
  color: inherit;
`;

export const h2 = css`
  font-weight: normal;
  font-size: 24px;
  color: inherit;
`;

export const h3 = css`
  font-weight: bold;
  font-size: 18px;
  color: inherit;
`;

export const p = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: inherit;
`;

export const blockquote = css`
  padding: 10px 20px;
  line-height: 24px;
  border-left: 5px solid #000;
  margin: 20px 0;
  color: #888;
`;

export const ul = css`
  padding: 0;
  list-style: none;
  margin-left: 15px;
  & > li::before {
    content: '-';
    display: inline-block;
    color: #999;
    position: absolute;
    margin-left: -15px;
  }
`;

export const ol = css`
  padding: 0;
  margin-left: 15px;
`;

export const li = css`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const inlineCode = css`
  color: '#bd10e0';
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, serif;
  font-size: 0.9em;
  white-space: pre-wrap;
  &::before {
    content: '\`';
  }
  &::after {
    content: '\`';
  }
`;

export const pre = css`
  border: 1px solid #eaeaea;
  padding: 20px;
  margin: 40px 0;
  white-space: pre;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export const code = css`
  color: #bd10e0;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, serif;
  font-size: 13px;
  line-height: 20px;
`;
