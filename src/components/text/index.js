import styled from 'react-emotion';

import Link from 'components/link';
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
  text-align: ${props => (props.center ? 'center' : 'left')};
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
P.Link = Link;

export const HR = styled('div')`
  border: 0;
  border-bottom: 1px solid #ccc;
  margin: 20px 0;
`;

export const Quote = styled('blockquote')`
  ${blockquote};
`;

export const HeroTitle = styled('h1')`
  margin-top: -100px;
  font-size: 70px;
  text-align: center;
  text-transform: uppercase;
  line-height: 70px;
  min-height: 150px;
  font-weight: 300;
  @media (max-width: 800px) {
    font-size: 60px;
    line-height: 60px;
    min-height: 90px;
  }
  @media (max-height: 500px) {
    margin-top: -50px;
  }
  @media (max-width: 400px) {
    font-size: 50px;
    line-height: 50px;
    min-height: 90px;
  }
  @media (max-width: 667px) and (max-height: 375px) {
    margin: 0;
    margin-top: -50px;
  }
  @media (max-width: 568px) and (max-height: 320px) {
    display: none;
  }
`;
