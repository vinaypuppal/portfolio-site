import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';

import { VpUser, VpWorks, VpBlog } from '../components/icons';
import Footer from '../components/footer';

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h1 {
    font-size: 70px;
    text-align: center;
    text-transform: uppercase;
    min-height: 180px;
    font-weight: 300;
  }
  & ul {
    padding: 0;
    margin: 0 auto;
    list-style: none;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    font-size: 70px;
    & > * {
      flex: 1;
    }
    & a {
      line-height: 0;
      display: block;
      color: #fff;
      text-decoration: none;
      font-weight: 300;
      &:hover {
        color: #ccc;
      }
      & span {
        font-size: 18px;
        line-height: 36px;
        display: block;
      }
    }
  }
`;

const IndexPage = () => (
  <Content>
    <h1>&lt;Hello! /&gt;</h1>
    <ul>
      <li>
        <Link to="/about">
          <VpUser size={60} />
          <span>About Me</span>
        </Link>
      </li>
      <li>
        <Link to="/works">
          <VpWorks size={60} />
          <span>My Works</span>
        </Link>
      </li>
      <li>
        <Link to="/blog">
          <VpBlog size={60} />
          <span>My Blog</span>
        </Link>
      </li>
    </ul>
    <Footer />
  </Content>
);

export default IndexPage;
