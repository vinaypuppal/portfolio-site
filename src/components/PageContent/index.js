import React from 'react';
import styled from 'react-emotion';

const Content = styled.div`
  box-shadow: inset 0 10px 10px -10px rgba(0, 0, 0, 0.8);
  color: #888;
  background: #fff;
  height: calc(100vh - 71px);
  overflow-y: auto;
  padding: 20px;
  position: relative;
  display: block;
  @media (max-width: 800px) {
    padding: 30px;
  }
  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  text-align: center;
  font-weight: 300;
  color: #5695d2;
  position: relative;
  z-index: 2;
  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    left: 50%;
    bottom: 2px;
    transform: translateX(-50%) rotate(-2deg);
    width: 300px;
    height: 40px;
    background: rgba(0, 127, 225, 0.1);
    @media (max-width: 480px) {
      height: 45px;
      bottom: -2px;
    }
    @media (max-width: 400px) {
      height: 35px;
      bottom: -2px;
    }
  }
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
  @media (max-width: 400px) {
    font-size: 1.3rem;
  }
`;

export default props => (
  <Content {...props}>
    <Container>{props.children}</Container>
  </Content>
);
