import React from 'react';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import PageContent, { PageTitle } from '../components/PageContent';

const queryString = require('query-string');

const Title = styled(PageTitle)`
  font-size: 32px;
  &:before {
    bottom: 0px;
    transform: translateX(-50%) rotate(-2deg);
    width: 200px;
    height: 40px;
  }
`;

const Works = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    padding: 0;
    padding-top: 2.5rem;
    grid-gap: 1rem;
    grid-row-gap: 2.5rem;
  }
`;

const Work = styled.div`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  display: grid;
  & img {
    width: 100%;
    border-bottom: 1px solid #ddd;
  }
  & h4 {
    text-align: center;
    margin: 5px 0 0 0;
  }
  & p {
    margin: 0;
    padding: 10px;
    text-align: center;
  }
  .cta {
    text-align: center;
    width: 100%;
    margin: 10px 0;
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
  }
`;

const Filters = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Filter = styled.li`
  margin: 15px;
  & a {
    text-decoration: none;
    padding: 10px 20px;
    color: #888;
    border: 2px solid;
    border-radius: 4px;
    transition: all 0.1s ease-in;
    cursor: pointer;
    &:hover,
    &.active {
      color: #5695d2;
    }
  }
  @media (max-width: 480px) {
    margin: 10px;
  }
`;

const WorksPage = ({ transition, location, data: { allContentJson: { edges: [edge] } } }) => {
  const query = queryString.parse(location.search);
  const filter = query.filter || 'vanilla';

  return (
    <PageContent style={transition && transition.style}>
      <Helmet>
        <title>My Works | VinayPuppal.com</title>
      </Helmet>
      <Title>My Works</Title>
      <Filters>
        <Filter>
          <Link to="/works?filter=vanilla" className={filter === 'vanilla' ? 'active' : ''}>
            Vanilla.js
          </Link>
        </Filter>
        <Filter>
          <Link to="/works?filter=react" className={filter === 'react' ? 'active' : ''}>
            React.js
          </Link>
        </Filter>
        <Filter>
          <Link to="/works?filter=node" className={filter === 'node' ? 'active' : ''}>
            Node.js
          </Link>
        </Filter>
      </Filters>
      <Works>
        {edge.node.allWorks.filter(work => work.category === filter).map(work => (
          <Work key={work.demoUrl}>
            <img src={work.previewUrl} alt={work.title} />
            <h4>{work.title}</h4>
            <p>{work.description}</p>
            <div className="cta">
              <a rel="noopener noreferrer" target="_blank" href={work.demoUrl}>
                View Demo
              </a>
            </div>
          </Work>
        ))}
      </Works>
    </PageContent>
  );
};

export default WorksPage;

export const query = graphql`
  query WorksQuery {
    allContentJson {
      edges {
        node {
          allWorks {
            title
            description
            demoUrl
            previewUrl
            category
          }
        }
      }
    }
  }
`;
