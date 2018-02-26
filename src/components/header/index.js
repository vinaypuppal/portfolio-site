import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaCodepen from 'react-icons/lib/fa/codepen';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaFcc from 'react-icons/lib/fa/fire';
import FaGithub from 'react-icons/lib/fa/github';
import FaMedium from 'react-icons/lib/fa/medium';

const Header = styled.header`
  padding: 20px 50px;
  padding-bottom: 12px;
  display: flex;
`;

const Logo = styled.h3`
  font-size: 2rem;
  line-height: 30px;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  & a {
    line-height: 30px;
    font-weight: 300;
    text-decoration: none;
    color: #fff;
  }
`;

const Navigation = styled.ul`
  flex: 2;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  text-align: center;
  & a {
    line-height: 30px;
    font-weight: 400;
    transition: all 0.25s ease-in;
    text-decoration: none;
    color: #fff;
    &.active {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 10px;
      color: #ddd;
    }
    &:hover {
      color: #ccc;
    }
  }
`;

const SocialLinks = styled.ul`
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  text-align: center;
  & li {
    margin: 0 10px;
  }
  & a {
    display: block;
    width: 30px;
    height: 30px;
    line-height: 25px;
    border-radius: 50%;
    border: 1px solid #fff;
    color: #fff;
    transition: all 0.2s ease-in;
    &:hover {
      color: #fff;
      border: none;
      &.facebook {
        background: #3b5998;
      }
      &.twitter {
        background: #00aced;
      }
      &.linkedin {
        background: #007bb6;
      }
      &.codepen {
        background: black;
      }
      &.fcc {
        background: green;
      }
      &.github {
        background: grey;
        color: black;
      }
      &.medium {
        background: #00ab6c;
      }
    }
  }
`;

const HeaderComponent = ({ isHomepage }) => (
  <Header>
    <Logo isHomepage>
      <Link to="/">Vinay Puppal</Link>
    </Logo>
    {isHomepage ? null : (
      <Navigation>
        <li>
          <Link activeClassName="active" to="/about">
            About Me
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/works">
            My Works
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/blog">
            Blog
          </Link>
        </li>
      </Navigation>
    )}
    <SocialLinks>
      <li>
        <a
          className="facebook"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/puppalvinay">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a
          className="twitter"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/vinaypuppal">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          className="linkedin"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/vinay-puppal-4514b7104">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          className="codepen"
          title="Codepen"
          target="_blank"
          rel="noopener noreferrer"
          href="http://codepen.io/vinaypuppal">
          <FaCodepen />
        </a>
      </li>
      <li>
        <a
          className="fcc"
          title="FreeCodeCamp"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.freecodecamp.com/vinaypuppal">
          <FaFcc />
        </a>
      </li>
      <li>
        <a
          className="github"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/vinaypuppal">
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          className="medium"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/vinaypuppal">
          <FaMedium />
        </a>
      </li>
    </SocialLinks>
  </Header>
);

export default HeaderComponent;
