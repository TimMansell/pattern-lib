/*  eslint-disable no-new */
import Ike from 'ike.js';

import { version } from '../package.json';
import * as utils from './shared/utils';
import sprite from './icons/sprite.svg';

import './progressive-image';
import './side-panel';
import HeaderTools from './top-nav/header-tools';

window.ui = {
  utils,
  loadHeaderTools: () => { new HeaderTools(); },
};

// Inject SVG sprite
new Ike(sprite, version);

// Initialise page on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.remove('no-js');
  window.ui.loadHeaderTools();
});
