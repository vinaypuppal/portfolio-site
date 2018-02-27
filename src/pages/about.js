import React from 'react';
import styled from 'react-emotion';
import IconHtml5 from 'react-devicon/html5/plain-wordmark';
import IconCss3 from 'react-devicon/css3/plain-wordmark';
import IconJavascript from 'react-devicon/javascript/plain';
import IconNodejs from 'react-devicon/nodejs/original';
import IconVuejs from 'react-devicon/vuejs/plain-wordmark';
import IconReact from 'react-devicon/react/original-wordmark';
import IconMongodb from 'react-devicon/mongodb/original';

import { IconGraphQL } from '../components/icons';
import PageContent, { PageTitle } from '../components/PageContent';

const About = styled.section`
  width: 100%;
  display: flex;
  padding-bottom: 30px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 90%;
    height: 2px;
    background: #eee;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Avatar = styled.div`
  flex: 1;
  text-align: center;
  & img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;

const Info = styled.div`
  text-align: center;
  & p {
    margin: 0;
    padding: 0;
    & strong {
      color: #888;
    }
    &.profession {
      font-size: 20px;
      margin-bottom: 10px;
    }
    &.name {
      color: #5695d2;
      font-size: 32px;
      margin-bottom: 10px;
      @media (max-width: 900px) {
        font-size: 1.5rem;
      }
    }
    &.email {
      margin-bottom: 10px;
      & a {
        color: #5695d2;
        transition: all 0.25s;
        &:hover {
          color: rgba(0, 127, 225, 0.7);
        }
      }
    }
    &.location {
      color: #5695d2;
    }
  }
`;

const Resume = styled.div`
  text-align: center;
  margin-top: 20px;
  width: 100%;
  & a {
    text-decoration: none;
    color: #5695d2;
    width: 200px;
    margin: 0 auto;
    display: block;
    padding: 10px 20px;
    border: 2px solid #5695d2;
    border-radius: 4px;
    transition: all 0.1s ease-in;
    &:hover {
      color: #fff;
      background: #5695d2;
      transform: scale(1.1);
    }
  }
`;

const Me = styled.section`
  flex: 2;
  font-weight: 300;
  & p {
    font-size: 18px;
    line-height: 1.7;
    letter-spacing: 2px;
    color: #444;
    @media (max-width: 1200px) {
      font-size: 1rem;
    }
    @media (max-width: 900px) {
      font-size: 15px;
    }
    @media (max-width: 800px) {
      text-align: center;
      font-size: 1rem;
    }
    @media (max-width: 480px) {
      text-align: center;
      font-size: 15px;
    }
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Technologies = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 30px 0;
  list-style: none;
  & li {
    margin: 5px 10px;
    & a {
      display: block;
      text-decoration: none;
      transition: all 0.2s ease-out;
      &:hover {
        transform: scale(1.1);
      }
      & small {
        display: block;
        text-align: center;
        margin-top: 0.2em;
        font-size: 20px;
        line-height: 1;
      }
      &.nodejs {
        color: #83ce2a;
      }
      &.mongodb {
        color: #439934;
      }
      &.graphql {
        color: #e10098;
      }
    }
    @media (max-width: 1200px) {
      margin: 20px 10px;
    }
  }
  @media (max-width: 800px) {
    padding-top: 10px;
  }
`;

const Include = styled.section`
  flex: 1;
  & h1 {
    &:before {
      bottom: -4px;
      transform: translateX(-50%) rotate(-2deg);
      width: 400px;
      height: 50px;
      @media (max-width: 480px) {
        height: 45px;
        bottom: -4px;
        width: 350px;
      }
      @media (max-width: 400px) {
        height: 40px;
        width: 300px;
      }
    }
  }
`;

const Focusing = styled.section`
  flex: 1;
  & ul {
    & li {
      margin: 0 20px;
      @media (max-width: 1200px) {
        margin: 20px;
      }
    }
  }
  & h1 {
    &:before {
      bottom: -2px;
      transform: translateX(-50%) rotate(-2deg);
      width: 320px;
      height: 45px;
      @media (max-width: 480px) {
        bottom: -5px;
      }
      @media (max-width: 400px) {
        height: 40px;
        width: 300px;
      }
    }
  }
`;

const skills = {
  include: [
    { name: 'Html5', icon: <IconHtml5 width={100} height={100} />, url: 'https://en.wikipedia.org/wiki/HTML5' },
    {
      name: 'Css3',
      icon: <IconCss3 width={100} height={100} />,
      url: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
    },
    { name: 'Js', icon: <IconJavascript width={100} height={100} />, url: 'https://en.wikipedia.org/wiki/JavaScript' },
    { name: 'ReactJs', icon: <IconReact width={100} height={100} />, url: 'https://reactjs.org' },
    { name: 'VueJs', icon: <IconVuejs width={100} height={100} />, url: 'https://vuejs.org' },
  ],
  focusing: [
    { name: 'NodeJs', icon: <IconNodejs width={80} height={80} />, url: 'https://nodejs.org' },
    { name: 'MongoDB', icon: <IconMongodb width={80} height={80} />, url: 'https://mongodb.com' },
    { name: 'GraphQL', icon: <IconGraphQL size={80} />, url: 'https://graphql.com' },
  ],
};

const AboutPage = ({ transition }) => (
  <PageContent style={transition && transition.style}>
    <About>
      <Avatar>
        <img src="https://res.cloudinary.com/vinaypuppal/image/upload/v1511183636/my_avatar.png" alt="avatar" />
        <Info>
          <p className="profession">--Web Developer--</p>
          <p className="name">Vinay Puppal</p>
          <p className="email">
            <strong>Email: </strong>
            <a rel="noopener noreferrer" target="_blank" href="mailto:hello@vinaypuppal.com">
              hello@vinaypuppal.com
            </a>
          </p>
        </Info>
        <Resume>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://res.cloudinary.com/vinaypuppal/image/upload/v1519216944/Vinay_Puppal_-_Resume_-_Front_End_Software_Developer_ew5ya9.pdf">
            View My Resume
          </a>
        </Resume>
      </Avatar>
      <Me>
        <PageTitle>A Little About Me</PageTitle>
        <p>
          I am a self-taught web developer with an eye for design, UX and UI development and a strong desire to learn
          and create.I firmly believe in life long learning and I am constantly exploring new ideas and technologies.
        </p>
        <p>
          <a rel="noopener noreferrer" target="_blank" href="https://freecodecamp.org/vinaypuppal">
            freeCodeCamp
          </a>{' '}
          has been the biggest help and inspiration to me. In working through its curriculum I have met other learners,
          pair programmed, got help and given help in its chat rooms, and enjoyed becoming part of a large community of
          people learning coding.
        </p>
        <p>
          I presently completed my B.tech in Information Technology(As of April,2016) and looking for any jobs in web
          development. I live in Hyderabad, India.
        </p>
      </Me>
    </About>
    <Skills>
      <Include>
        <PageTitle>Some of my skills include</PageTitle>
        <Technologies>
          {skills.include.map(skill => (
            <li>
              <a className={skill.name.toLowerCase()} rel="noopener noreferrer" target="_blank" href={skill.url}>
                {skill.icon}
              </a>
            </li>
          ))}
        </Technologies>
      </Include>
      <Focusing>
        <PageTitle>Currently focusng on</PageTitle>
        <Technologies>
          {skills.focusing.map(skill => (
            <li>
              <a className={skill.name.toLowerCase()} rel="noopener noreferrer" target="_blank" href={skill.url}>
                {skill.icon}
                <small>{skill.name}</small>
              </a>
            </li>
          ))}
        </Technologies>
      </Focusing>
    </Skills>
  </PageContent>
);

export default AboutPage;
