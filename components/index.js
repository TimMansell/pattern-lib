/*  eslint-disable no-new */
import Vue from 'vue';

// Promise polyfill
require('es6-promise').polyfill();

import * as utils from './shared/utils';
import { version } from '../package.json';

// Auto-inject SVG icon sprite with `svg-sprite-loader`
import './icons/sprite';
import './side-panel';

// Expose JS utilities
window.ui = { utils };

// Initialise page on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.remove('no-js');
  initTracking();
});

function initTracking() {
  // Track pattern library version
  window.utag_data = window.utag_data || {};
  window.utag_data.uom_version = `v${version}`;

  utils.loadScript('https://tags.tiqcdn.com/utag/unimelb/main/prod/utag.js')
    .then(() => {
      if (process.env.NODE_ENV !== 'production') return;

      // Set up tracking of Vue render errors in production
      Vue.config.errorHandler = (err) => {
        trackError('vue-render', err);
      };
    });
}

function trackError(category, err) {
  if (!window.utag) return;
  window.utag.link({
    ga_EventCategory: category,
    ga_EventAction: 'error',
    ga_EventLabel: err.toString(),
  });
}
