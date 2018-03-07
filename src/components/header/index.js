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
import MdBackArrow from 'react-icons/lib/md/arrow-back';

import { toCapitalizedWords, capitalize } from '../../utils';
import { Container } from '../PageContent';

const Header = styled.header`
  padding: 20px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 1080px) {
    padding-bottom: 5px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.h3`
  line-height: 0px;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  width: 232px;
  height: 46px;
  & a {
    font-weight: 300;
    text-decoration: none;
    color: #fff;
    font-size: 32px;
    position: relative;
    & span {
      position: absolute;
      top: 50%;
      transfrom: translateY(-50%);
      left: 0;
      opacity: 0;
    }
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
  @media (max-width: 600px) {
    display: none;
  }
`;

const SocialLinks = styled.ul`
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  @media (max-width: 1000px) {
    display: ${props => (props.isHomepage ? 'flex' : 'none')};
  }
  @media (max-width: 600px) {
    margin: 30px;
    justify-content: center;
  }
  @media (max-width: 350px) {
    flex-wrap: wrap;
    & li {
      margin: 10px;
    }
  }
`;

const BackArrow = styled(Link)`
  position: absolute;
  color: #fff;
  text-decoration: none;
  top: 24px;
  left: 15px;
  display: ${props => (props.isHomepage ? 'none' : 'block')};
  @media (min-width: 600px) {
    display: none;
  }
`;

const IconMap = {
  facebook: <FaFacebook />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedin />,
  codepen: <FaCodepen />,
  github: <FaGithub />,
  fcc: <FaFcc />,
  medium: <FaMedium />,
};

const HeaderComponent = ({ isHomepage, socialLinks, navigationLinks }) => (
  <Container>
    <Header>
      <BackArrow to="/" isHomepage={isHomepage}>
        <MdBackArrow size={40} />
      </BackArrow>
      <Logo isHomepage={isHomepage}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/vinaypuppal/image/upload/v1519710524/vinaypuppal_ichgm0.png"
            alt="VinayPuppal"
          />
          <span>VinayPuppal</span>
        </Link>
      </Logo>
      {isHomepage ? null : (
        <Navigation>
          {Object.keys(navigationLinks).map(name => (
            <li key={name}>
              <Link activeClassName="active" to={navigationLinks[name]}>
                {toCapitalizedWords(name)}
              </Link>
            </li>
          ))}
        </Navigation>
      )}
      <SocialLinks isHomepage={isHomepage}>
        {Object.keys(socialLinks).map(linkName => (
          <li key={linkName}>
            <a
              className={linkName}
              title={capitalize(linkName)}
              target="_blank"
              rel="noopener noreferrer"
              href={socialLinks[linkName]}>
              {IconMap[linkName]}
            </a>
          </li>
        ))}
      </SocialLinks>
    </Header>
  </Container>
);

export default HeaderComponent;
