import React from 'react';
import styled from 'react-emotion';

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    text-align: center;
    color: #fff;
    margin: 0;
    font-weight: 300;
  }
`;

const FooterComponent = () => (
  <Footer>
    <p> VinayPuppal &copy; 2016 - {new Date().getFullYear()}</p>
  </Footer>
);

export default FooterComponent;
