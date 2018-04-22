import React from 'react';
import PropTypes from 'prop-types';
import FaFcc from 'react-icons/lib/fa/fire';
import FaHorn from 'react-icons/lib/fa/bullhorn';
import FaCubes from 'react-icons/lib/fa/cubes';
import MdShare from 'react-icons/lib/md/share';
import FaMedium from 'react-icons/lib/fa/medium';
import FaGithub from 'react-icons/lib/fa/github';
import FaCodepen from 'react-icons/lib/fa/codepen';
import FaCircleO from 'react-icons/lib/fa/circle-o';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaWhatsapp from 'react-icons/lib/fa/whatsapp';
import MdBackArrow from 'react-icons/lib/md/arrow-back';
import FaCicleCheck from 'react-icons/lib/fa/check-circle';

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
  back: <MdBackArrow />,
  horn: <FaHorn />,
  css3: <IconCss3 />,
  blog: <IconBlog />,
  user: <IconUser />,
  vuejs: <IconVueJs />,
  share: <MdShare />,
  cubes: <FaCubes />,
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
  whatsapp: <FaWhatsapp />,
  facebook: <FaFacebook />,
  linkedin: <FaLinkedin />,
  javascript: <IconJavascript />,
  'circle-o': <FaCircleO />,
  'circle-check': <FaCicleCheck />,
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
