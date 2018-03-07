import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';

import { VpUser, VpWorks, VpBlog } from '../components/icons';
import Footer from '../components/footer';
import { toCapitalizedWords } from '../utils';

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 71px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h1 {
    margin-top: -100px;
    font-size: 70px;
    text-align: center;
    text-transform: uppercase;
    line-height: 70px;
    min-height: 150px;
    font-weight: 300;
    @media (max-width: 780px) {
      font-size: 60px;
      line-height: 60px;
      min-height: 90px;
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
  }
  & ul {
    margin-top: -100px;
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
    @media (max-width: 900px) {
      width: 70%;
    }
    @media (max-width: 780px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 90%;
    }
    @media (max-width: 480px) {
      width: 100%;
      & a span {
        font-size: 16px;
        font-weight: 400;
      }
    }
    @media (max-width: 400px) {
      width: 100%;
      & svg {
        width: 50px;
        height: 50px;
      }
    }
    @media (max-width: 375) {
      & a span {
        font-size: 14px;
      }
    }
    @media (max-width: 667px) and (max-height: 375px) {
      margin-top: 0;
      & svg {
        width: 50px;
        height: 50px;
      }
      & a span {
        font-size: 14px;
      }
    }
    @media (max-width: 568px) and (max-height: 320px) {
      margin-top: -80px;
    }
  }
  @media (max-width: 600px) {
    height: calc(100vh - 156px);
  }
  @media (max-width: 350px) {
    height: calc(100vh - 226px);
  }
`;

const IconMap = {
  aboutMe: <VpUser size={60} />,
  myWorks: <VpWorks size={60} />,
  myBlog: <VpBlog size={60} />,
};

const IndexPage = ({ transition, data: { site: { siteMetadata: { navigationLinks } } } }) => (
  <Content style={transition && transition.style}>
    <h1>&lt;Hello! /&gt;</h1>
    <ul>
      {Object.keys(navigationLinks).map(name => (
        <li key={name}>
          <Link to={navigationLinks[name]}>
            {IconMap[name]}
            <span>{toCapitalizedWords(name)}</span>
          </Link>
        </li>
      ))}
    </ul>
    <Footer />
  </Content>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        navigationLinks {
          aboutMe
          myWorks
          myBlog
        }
      }
    }
  }
`;

export default IndexPage;
