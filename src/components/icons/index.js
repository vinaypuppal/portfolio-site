import React from 'react';
import PropTypes from 'prop-types';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaCodepen from 'react-icons/lib/fa/codepen';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaFcc from 'react-icons/lib/fa/fire';
import FaGithub from 'react-icons/lib/fa/github';
import FaMedium from 'react-icons/lib/fa/medium';

const iconMap = {
  facebook: <FaFacebook />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedin />,
  codepen: <FaCodepen />,
  github: <FaGithub />,
  fcc: <FaFcc />,
  medium: <FaMedium />,
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
