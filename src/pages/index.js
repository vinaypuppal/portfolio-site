import React from 'react';

import { IndexContent } from 'components/layout';
import { HeroTitle } from 'components/text';
import Nav from 'components/nav';
import Footer from 'components/footer';

const IndexPage = ({
  data: {
    allContentYaml: {
      edges: [edge],
    },
  },
}) => (
  <IndexContent>
    <HeroTitle>&lt;Hello!... /&gt;</HeroTitle>
    <Nav.Hero pages={edge.node.pages} />
    <Footer title={edge.node.title} />
  </IndexContent>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allContentYaml {
      edges {
        node {
          title
          pages {
            name
            path
            icon
          }
        }
      }
    }
  }
`;
