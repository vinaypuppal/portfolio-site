import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'react-emotion';
import Img from 'gatsby-image';

import { H3, P } from 'components/text';
import Link from 'components/link';
import { formatDate } from '../../utils';

const WorksComponent = ({ works, category }) => (
  <Works>
    {works
      .filter(work => work.category === category)
      .sort((a, b) => b.date - a.date)
      .map(work => (
        <Work key={work.demoUrl}>
          <Img
            outerWrapperClassName="img-wrapper"
            sizes={work.thumbnail.childImageSharp.sizes}
            alt={work.title}
          />
          <Title>
            <span aria-label={work.title} role="img">
              {work.icon}
            </span>{' '}
            {work.title}
          </Title>
          <WorkDate>{formatDate(work.date * 1000, 'MMM Do YYYY')}</WorkDate>
          <Description>{work.description}</Description>
          <Cta>
            <Link.Button href={work.demoUrl}>View Demo</Link.Button>
          </Cta>
        </Work>
      ))}
  </Works>
);

export default WorksComponent;

WorksComponent.propTypes = {
  category: PropTypes.string.isRequired,
  works: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      demoUrl: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      thumbnail: PropTypes.object,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Works = styled.ul`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 50px;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  50% {
    opacity: 1;
  }
`;

const Work = styled.li`
  width: calc(33.33% - 2rem);
  margin: 1rem;
  border: 1px solid #d4d9dd;
  display: flex;
  animation: ${zoomIn} 1s both;
  align-items: center;
  border-radius: 8px;
  flex-direction: column;
  background-color: #fff;
  & .img-wrapper {
    width: 100%;
  }
  & img {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #d4d9dd;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  @media (max-width: 1000px) {
    width: calc(50% - 2rem);
  }
  @media (max-width: 780px) {
    width: calc(90% - 2rem);
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

const Title = styled(H3)`
  margin-bottom: 10px;
  text-align: center;
`;

const WorkDate = styled.div`
  color: #999;
  font-size: 14px;
  text-align: ${props => (props.center ? 'center' : 'left')};
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Description = styled(P)`
  margin: 0;
  padding: 10px;
  display: flex;
  font-size: 1rem;
  text-align: center;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    min-height: auto;
  }
`;

const Cta = styled.div`
  width: 100%;
  margin: 10px 0 20px 0;
  text-align: center;
`;
