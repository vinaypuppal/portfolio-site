import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import Link from 'components/link';
import { P } from 'components/text';

const AvatarComponent = ({ avatar, email, resumeLink }) => (
  <Avatar>
    <Img
      resolutions={avatar.resolutions}
      alt={`${avatar.title}_avatar_image`}
    />
    <Info>
      <Name>{avatar.title}</Name>
      <Email>
        <P.B>Email</P.B>: <P.Link href={`mailto:${email}`}>{email}</P.Link>
      </Email>
      <Link.Button href={resumeLink}>View My Resume</Link.Button>
    </Info>
  </Avatar>
);

export default AvatarComponent;

AvatarComponent.propTypes = {
  avatar: PropTypes.shape({
    resolutions: PropTypes.object,
    title: PropTypes.string,
  }).isRequired,
  email: PropTypes.string.isRequired,
  resumeLink: PropTypes.string.isRequired,
};

const Avatar = styled('div')`
  flex: 1;
  text-align: center;
  & img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  @media (max-width: 1024px) {
    margin-right: 20px;
  }
  @media (max-width: 800px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Info = styled('div')`
  text-align: center;
`;

const Name = styled(P)`
  font-size: 2rem;
  margin: 0;
  line-height: 1.2;
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Email = styled(P)`
  margin: 15px 0;
`;
