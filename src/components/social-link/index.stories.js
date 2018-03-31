import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  number,
  select,
  boolean,
  text,
} from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import SocialLink from './index';

const stories = storiesOf('Social Links', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

const networks = [
  'facebook',
  'twitter',
  'linkedin',
  'fcc',
  'codepen',
  'github',
  'medium',
];

stories.add(
  'Link with icon',
  withInfo(`
    This is the basic usage of social link with icon
  `)(() => (
    <SocialLink
      width={number('Width', 30)}
      height={number('Height', 30)}
      network={select('Network', networks, 'facebook')}
      iconSize={number('Icon Size', 20)}
      url={text('Profile URL', 'https://facebook.com/puppalvinay')}
    />
  ))
);

stories.add(
  'Circular link with icon',
  withInfo(`
    This is the basic usage of circular social link with icon
  `)(() => (
    <SocialLink
      width={number('Width', 30)}
      height={number('Height', 30)}
      network={select('Network', networks, 'facebook')}
      circular={boolean('Circular', true)}
      iconSize={number('IconSize', 20)}
      url={text('Profile URL', 'https://facebook.com/puppalvinay')}
    />
  ))
);
