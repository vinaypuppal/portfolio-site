import React, { Fragment } from 'react';

import { Container, Content } from 'components/layout';
import { About, Technologies, Avatar, Bio, Skills } from 'components/about';
import { HR } from 'components/text';
import PageTitle from 'components/head/page-title';
import ShareButton from 'components/share-button';
import Icon from 'components/icon';

const AboutPage = ({
  data: {
    allContentYaml: {
      edges: [edge],
    },
    location: { pathname },
  },
}) => {
  const {
    city,
    email,
    title,
    skills,
    avatar,
    siteUrl,
    company,
    country,
    resumeLink,
  } = edge.node;
  const pageTitle = `About Me | ${title}.com`;
  return (
    <Fragment>
      <ShareButton
        title={pageTitle}
        text="Checkout:"
        url={window ? window.location.href : `${siteUrl}${pathname}`}
      >
        <Icon name="share" />
      </ShareButton>
      <Content>
        <PageTitle title={pageTitle} />
        <Container>
          <About>
            <Avatar
              email={email}
              avatar={{
                resolutions: avatar.childImageSharp.resolutions,
                title,
              }}
              resumeLink={resumeLink}
            />
            <Bio city={city} company={company} country={country} />
          </About>
          <HR />
          <Technologies>
            <Skills skills={skills.include} title="Some of my skills include" />
            <Skills skills={skills.focusing} title="Currently focusing on" />
          </Technologies>
        </Container>
      </Content>
    </Fragment>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    allContentYaml {
      edges {
        node {
          city
          email
          title
          country
          siteUrl
          resumeLink
          company {
            url
            name
            position
          }
          avatar {
            childImageSharp {
              resolutions(width: 200, height: 200) {
                ...GatsbyImageSharpResolutions_withWebp_tracedSVG
              }
            }
          }
          skills {
            include {
              url
              name
              color
            }
            focusing {
              url
              name
              color
            }
          }
        }
      }
    }
  }
`;
