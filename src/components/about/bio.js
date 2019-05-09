import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { H1, P } from 'components/text';

const BioComponent = ({ company, city, country }) => (
  <Bio>
    <H1 center>About Me</H1>
    <P>
      I am a <P.B>self-taught</P.B> Javascript developer from {city},
      {country.toUpperCase()}. About four years ago is when I started my
      learning journey on how to make the web stunning and responsive. I have
      always been a curious individual, which is why I’d love to collaborate and
      do some real-world projects in order to flourish my skills.
    </P>
    <P>
      <P.Link href="https://freecodecamp.org/vinaypuppal">freeCodeCamp</P.Link>
      has been the biggest help and inspiration to me. In working through its
      curriculum I have met other learners, pair programmed, got help and given
      help in its chat rooms, and enjoyed becoming part of a large community of
      people learning coding.
    </P>
    <P>
      I am focusing on{' '}
      <P.Link href="https://developers.google.com/web/progressive-web-apps/">
        PWAs
      </P.Link>
      ,{' '}
      <P.Link href="https://developers.google.com/web/fundamentals/performance/why-performance-matters/">
        Web Performance
      </P.Link>{' '}
      and <P.Link href="https://amp.dev/">AMP</P.Link> to build fast and high
      performance web apps. At present I work as {company.position} at{' '}
      <P.Link href={company.url}>{company.name}</P.Link>
    </P>
  </Bio>
);

export default BioComponent;

BioComponent.propTypes = {
  company: PropTypes.shape({
    position: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

const Bio = styled('div')`
  flex: 2;
`;
