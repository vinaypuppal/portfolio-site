import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { H1, P } from 'components/text';

const BioComponent = ({ company, city, country }) => (
  <Bio>
    <H1 center>A Little About Me</H1>
    <P>
      I am a <P.B>self-taught</P.B> web developer with an eye for design, UX and
      UI development and a strong desire to learn and create.I firmly believe in
      life long learning and I am constantly exploring new ideas and
      technologies.
    </P>
    <P>
      <P.Link href="https://freecodecamp.org/vinaypuppal">freeCodeCamp</P.Link>
      has been the biggest help and inspiration to me. In working through its
      curriculum I have met other learners, pair programmed, got help and given
      help in its chat rooms, and enjoyed becoming part of a large community of
      people learning coding.
    </P>
    <P>
      At present I work as {company.position} at{' '}
      <P.Link href={company.url}>{company.name}</P.Link> I live in {city},
      {country.toUpperCase()}
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
