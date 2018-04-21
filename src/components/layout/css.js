import { css } from 'react-emotion';

import colors from 'styles/colors';

export const container = css`
  max-width: 1440px;
  margin: 0 auto;
`;

export const indexContent = css`
  width: 100%;
  height: calc(100vh - 71px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: '#fff';
  @media (max-width: 600px) {
    height: calc(100vh - 156px);
  }
  @media (max-width: 350px) {
    height: calc(100vh - 226px);
  }
`;

export const content = css`
  box-shadow: inset 0 10px 10px -10px rgba(0, 0, 0, 0.8);
  color: ${colors.text};
  background: ${colors.bg};
  height: calc(100vh - 71px);
  overflow-y: auto;
  padding: 20px;
  position: relative;
  display: block;
  @media (max-width: 800px) {
    padding: 30px;
  }
  @media (max-width: 600px) {
    height: calc(100vh - 66px);
  }
  @media (max-width: 480px) {
    padding: 30px 15px 30px;
  }
`;

export const placeHolder = css`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
