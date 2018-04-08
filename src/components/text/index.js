import styled, { css } from 'react-emotion';

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

export const Bold = styled('span')`
  font-weight: 600;
`;

export const H1 = styled('h1')`
  ${h1};
`;

H1.B = Bold;

export const H2 = styled('h2')`
  ${h2};
`;

export const H3 = styled('h3')`
  ${h3};
`;

export const P = styled('p')`
  ${p};
`;

P.B = Bold;

export const HR = styled('div')`
  border: 0;
  border-bottom: 1px solid #ccc;
  margin: 50px 30px;
`;

export const Quote = styled('blockquote')`
  ${blockquote};
`;
