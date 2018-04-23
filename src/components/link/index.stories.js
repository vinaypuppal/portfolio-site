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

import Link from './index';

const stories = storiesOf('Link', module);

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
  'Text',
  withInfo(`
    This is the basic usage of text link
  `)(() => <Link href="https://freecodecamp.org">freeCodeCamp</Link>)
);

stories.add(
  'Button',
  withInfo(`
    This is the basic usage of button link
  `)(() => (
    <Link.Button href="https://resume.io/r/EenQb">View My Resume</Link.Button>
  ))
);

stories.add(
  'Outlined Button',
  withInfo(`
    This is the basic usage of button link
  `)(() => (
    <Link.Button outline href="https://resume.io/r/EenQb">
      View My Resume
    </Link.Button>
  ))
);

stories.add(
  'Social with icon',
  withInfo(`
    This is the basic usage of social link with icon and just required props
  `)(() => (
    <Link.Social
      network={select('Network', networks, 'facebook')}
      href={text('Profile URL', 'https://facebook.com/puppalvinay')}
    />
  ))
);

stories.add(
  'Circular social with icon',
  withInfo(`
    This is the basic usage of circular social link with icon and all props
  `)(() => (
    <Link.Social
      width={number('Width', 30)}
      height={number('Height', 30)}
      network={select('Network', networks, 'facebook')}
      circular={boolean('Circular', true)}
      iconSize={number('IconSize', 20)}
      href={text('Profile URL', 'https://facebook.com/puppalvinay')}
    />
  ))
);
