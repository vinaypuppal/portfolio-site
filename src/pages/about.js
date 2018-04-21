import React from 'react';

import { Container, Content } from 'components/layout';
import { About, Technologies, Avatar, Bio, Skills } from 'components/about';
import { HR } from 'components/text';

const AboutPage = ({
  data: {
    allContentYaml: {
      edges: [edge],
    },
  },
}) => {
  const {
    city,
    email,
    title,
    skills,
    avatar,
    company,
    country,
    resumeLink,
  } = edge.node;
  return (
    <Container>
      <Content>
        <About>
          <Avatar
            email={email}
            avatar={{ resolutions: avatar.childImageSharp.resolutions, title }}
            resumeLink={resumeLink}
          />
          <Bio city={city} company={company} country={country} />
        </About>
        <HR />
        <Technologies>
          <Skills skills={skills.include} title="Some of my skills include" />
          <Skills skills={skills.focusing} title="Currently focusing on" />
        </Technologies>
      </Content>
    </Container>
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
