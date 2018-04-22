import React from 'react';

import { Container, Content } from 'components/layout';
import { Works, Filters } from 'components/works';
import { H1 } from 'components/text';

const WorksPage = ({
  data: {
    allContentYaml: {
      edges: [edge],
    },
  },
  pathContext: { category, categories },
}) => (
  <Content>
    <Container>
      <H1 center>My Works</H1>
      <Filters categories={categories} currentCategory={category} />
      <Works works={edge.node.works} category={category} />
    </Container>
  </Content>
);

export default WorksPage;

export const query = graphql`
  query WorksQuery {
    allContentYaml {
      edges {
        node {
          works {
            icon
            date
            title
            demoUrl
            category
            description
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 414, maxHeight: 200) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
