/*  eslint-disable no-new */
import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image';

import { AccordionGroup, AccordionPanel } from '../../components/accordion';
import CheckList from '../../components/check-list';
import ModalDialog from '../../components/modal';
import PageNav from '../../components/page/nav';
import PageSearch from '../../components/page/search';
import TabGroup from '../../components/tabs';

import '../../components';

// Load shared SVG assets
require.context('../../components/shared', false, /\.svg$/);

// Register Vue plugins, directives and components
Vue.use(VueProgressiveImage);
Vue.component('accordion-group', AccordionGroup);
Vue.component('accordion-panel', AccordionPanel);
Vue.component('check-list', CheckList);
Vue.component('modal-dialog', ModalDialog);
Vue.component('page-nav', PageNav);
Vue.component('page-search', PageSearch);
Vue.component('tab-group', TabGroup);

// Create Vue instance
new Vue({ el: '#ui' });
