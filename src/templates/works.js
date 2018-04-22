import React, { Fragment } from 'react';

import { Container, Content } from 'components/layout';
import { Works, Filters } from 'components/works';
import { H1 } from 'components/text';
import PageTitle from 'components/head/page-title';
import Footer from 'components/footer';
import Icon from 'components/icon';
import ShareButton from 'components/share-button';

const WorksPage = ({
  data: {
    allContentYaml: {
      edges: [edge],
    },
  },
  pathContext: { category, categories },
}) => {
  const pageTitle = `My ${category}.js Works | VinayPuppal.com`;
  return (
    <Fragment>
      <ShareButton
        title={pageTitle}
        text="Checkout:"
        url={
          window
            ? window.location.href
            : `${edge.node.siteUrl}/works/${category}`
        }
      >
        <Icon name="share" />
      </ShareButton>
      <Content>
        <PageTitle title={pageTitle} />
        <Container>
          <H1 center>My Works</H1>
          <Filters categories={categories} currentCategory={category} />
          <Works works={edge.node.works} category={category} />
          <Footer title={edge.node.title} inverted />
        </Container>
      </Content>
    </Fragment>
  );
};

export default WorksPage;

export const query = graphql`
  query WorksQuery {
    allContentYaml {
      edges {
        node {
          title
          siteUrl
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
