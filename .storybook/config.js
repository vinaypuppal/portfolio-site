/**
 * Config file for storybook
 */

import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'VinayPuppal',
  url: '#',
  showDownPanel: true,
  downPanelInRight: true,
});

// Stories loader
const req = require.context('../src', true, /.stories.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(req);
}

// Initialize react-storybook
configure(loadStories, module);
