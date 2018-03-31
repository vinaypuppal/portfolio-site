import componentTypes from '../../hocs/component-types';
import SocialLink from './social';

export default componentTypes(
  {
    social: SocialLink,
    default: SocialLink,
  },
  { displayName: 'Link' }
);
