import React from 'react';
import PropTypes from 'prop-types';
import FaFcc from 'react-icons/lib/fa/fire';
import FaMedium from 'react-icons/lib/fa/medium';
import FaGithub from 'react-icons/lib/fa/github';
import FaCodepen from 'react-icons/lib/fa/codepen';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

import Logo from './logo';
import {
  IconBlog,
  IconCss3,
  IconUser,
  IconWorks,
  IconHtml5,
  IconReact,
  IconVueJs,
  IconNodeJs,
  IconMongoDb,
  IconGraphQL,
  IconJavascript,
} from './custom';

const iconMap = {
  fcc: <FaFcc />,
  logo: <Logo />,
  css3: <IconCss3 />,
  blog: <IconBlog />,
  user: <IconUser />,
  vuejs: <IconVueJs />,
  html5: <IconHtml5 />,
  works: <IconWorks />,
  github: <FaGithub />,
  nodejs: <IconNodeJs />,
  medium: <FaMedium />,
  mongodb: <IconMongoDb />,
  reactjs: <IconReact />,
  graphql: <IconGraphQL />,
  twitter: <FaTwitter />,
  codepen: <FaCodepen />,
  facebook: <FaFacebook />,
  linkedin: <FaLinkedin />,
  javascript: <IconJavascript />,
};

const Icon = ({ name, size }) => React.cloneElement(iconMap[name], { size });

export default Icon;

Icon.propTypes = {
  /** Icon name eg. facebook or twitter */
  name: PropTypes.string.isRequired,
  /** Icon size i.e width and height */
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 20,
};
