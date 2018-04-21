import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { H1 } from 'components/text';
import Icon from 'components/icon';
import { capitalize } from 'utils';

const SkillsComponent = ({ title, skills }) => (
  <Section>
    <H1 center>{title}</H1>
    <Skills>
      {skills.map(skill => (
        <Skill key={skill.name}>
          <SkillLink
            rel="noopener noreferrer"
            href={skill.url}
            target="_blank"
            color={skill.color}
          >
            <Icon size={80} name={skill.name.toLowerCase()} />
            <SkillName>{capitalize(skill.name)}</SkillName>
          </SkillLink>
        </Skill>
      ))}
    </Skills>
  </Section>
);

export default SkillsComponent;

SkillsComponent.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
};

const Section = styled.section`
  flex: 1;
  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;

const Skills = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Skill = styled.li`
  margin: 10px 20px;
`;

const SkillLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  color: ${props => (props.color ? props.color : 'inherit')};
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const SkillName = styled.small`
  display: block;
  text-align: center;
  margin-top: 0.2em;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1;
  color: inherit;
  user-select: none;
`;
