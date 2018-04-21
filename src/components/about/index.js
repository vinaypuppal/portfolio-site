import styled, { css } from 'react-emotion';

import Avatar from './avatar';
import Bio from './bio';
import Skills from './skills';

export { Avatar, Bio, Skills };

const flex = css`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const About = styled.div`
  ${flex};
`;

export const Technologies = styled.div`
  ${flex};
`;
