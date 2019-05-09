import styled, { css } from 'react-emotion';

import Avatar from './avatar';
import Bio from './bio';
import Skills from './skills';

export { Avatar, Bio, Skills };

const flex = css`
  width: 100%;
  display: flex;
  position: relative;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const About = styled.div`
  ${flex};
  align-items: center;
`;

export const Technologies = styled.div`
  ${flex};
  padding-bottom: 22px;
`;
