import React from 'react';
import styled from 'react-emotion';

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  background: ${props => (props.inverted ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    text-align: center;
    color: ${props => (props.inverted ? '#888' : '#fff')};
    margin: 0;
    font-weight: 300;
  }
`;

const FooterComponent = props => (
  <Footer {...props}>
    <p> VinayPuppal &copy; 2016 - {new Date().getFullYear()}</p>
  </Footer>
);

export default FooterComponent;
