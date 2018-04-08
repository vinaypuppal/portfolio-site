import styled from 'react-emotion';

import { inlineCode, code, pre, h1, h2, h3, p, blockquote } from './css';

export const Bold = styled('span')`
  font-weight: 600;
`;

export const InlineCode = styled('code')`
  ${inlineCode};
`;

export const Pre = styled('pre')`
  ${pre};
`;

export const Code = styled('code')`
  ${code};
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
P.Code = InlineCode;

export const HR = styled('div')`
  border: 0;
  border-bottom: 1px solid #ccc;
  margin: 50px 30px;
`;

export const Quote = styled('blockquote')`
  ${blockquote};
`;
