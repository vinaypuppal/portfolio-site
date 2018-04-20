import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from './index';

const stories = storiesOf('Nav', module);

stories.addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));

const pages = [
  {
    name: 'aboutMe',
    path: '/about',
    icon: 'user',
  },
  {
    name: 'myWorks',
    path: '/works',
    icon: 'works',
  },
  {
    name: 'myBlog',
    path: '/blog',
    icon: 'blog',
  },
];

stories.add('Main', () => <Nav pages={pages} />);

stories.add('Hero', () => <Nav.Hero pages={pages} story />);
