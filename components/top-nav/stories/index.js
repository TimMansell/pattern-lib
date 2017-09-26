import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  withKnobs
} from '@storybook/addon-knobs';

import TopNav from './TopNav.vue';
import NavTrigger from './NavTrigger.vue';
import Search from './Search.vue';

storiesOf('Top nav', module)
  .addDecorator(withKnobs)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <div>
          <Story/>
        </div>`,
    };
  })

  .add(
    'Search only', () => ({
      components: { TopNav, Search },
      mounted: () => { loadHeaderTools() },
      template: `
        <div class="header-tools">
          <search />
        </div>`
    })
  )

  .add(
    'Basic site navigation', () => ({
      components: { TopNav, NavTrigger, Search },
      mounted: () => { loadHeaderTools() },
      template: `
      <div>
        <div class="header-tools">
          <search />
          <nav-trigger />
        </div>
        <top-nav />
      </div>`
    })
  )
  .add(
    'Nested site navigation', () => ({
      components: { TopNav, Search, NavTrigger },
      mounted: () => { loadHeaderTools() },
      template: `
      <div>
        <div class="header-tools">
          <search />
          <nav-trigger />
        </div>
        <top-nav :complex="true" />
      </div>`
    })
  );
