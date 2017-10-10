import Vue from 'vue';
import { configure } from '@storybook/vue';

import { version } from '../package.json';
import { utils } from 'shared';

import Icon from 'icons/stories/Icon.vue';
import SectionWrap from '../components/section/stories/SectionWrap.vue';
import ListItem from '../components/listing/stories/listitem.vue';
import ButtonIcon from '../components/buttons/stories/ButtonIcon.vue';

// Import documentation styles
import './index.css';

// Import lib
if (process.env.LOAD_EXTERNAL_ASSETS === 'true') {
  // Load from CDN in prod
  const url = `${process.env.CDN_URL}/v${version}`;
  utils.loadStylesheet(`${url}/ui.css`);
  utils.loadScript(`${url}/ui.js`);
} else {
  // Require locally in dev
  require('../components/index.css');
  require('../components/index.js');
}

// Register shared documentation components
Vue.component('icon', Icon);
Vue.component('section-wrap', SectionWrap);
Vue.component('list-item', ListItem);
Vue.component('button-icon', ButtonIcon);

// Load stories
const stories = require.context('../components', true, /stories\/index\.js$/);
configure(loadStories, module);

function loadStories() {
  stories.keys().forEach(filename => stories(filename));
}
