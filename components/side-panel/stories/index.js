import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import RenderMarkup from '../../RenderMarkup';
import SidePanelReadme from './SidePanel.md';
import SidePanel from './SidePanel.vue';
import Banner from './../../banner/stories/Banner.vue';
import BoilerplateFooter from './../../footer/stories/BoilerplateFooter.vue';

const SidePanelMarkup = new RenderMarkup(SidePanel);

storiesOf('Side Nav', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story, Banner, BoilerplateFooter },
      template: `
        <div>
          <banner :level="2"/>
          <Story/>
          <boilerplate-footer />
        </div>
        `,
    };
  })
  .addDecorator(withKnobs)
  .addDecorator(withReadme(SidePanelReadme))
  .add('Left side panel', withReadme(SidePanelMarkup.prettifiedMarkup, () => {
    return {
      components: { SidePanel },
      template: `
      <div class="layout layout--left">
        <side-panel class="layout__pre bg-light-blue"></side-panel>
        <main class="layout__main">
          <section-wrap class="bg-white">
            <h2>test content</h2>
          </section-wrap>
          <section-wrap class="bg-alt">
            test content
          </section-wrap>
          <section-wrap class="bg-white">
            test content
          </section-wrap>
        </main>
      </div>
      
      `
    }
  }))
  .add('Right side panel', withReadme(SidePanelMarkup.prettifiedMarkup, () => {
    return {
      components: { SidePanel },
      template: `
      <div class="layout layout--right clearfix">
        <side-panel class="layout__post bg-light-blue"></side-panel>
        <main class="layout__main">
          <section-wrap class="bg-white">
            <h2>test content</h2>
          </section-wrap>
          <section-wrap class="bg-alt">
            test content
          </section-wrap>
          <section-wrap class="bg-white">
            test content
          </section-wrap>
        </main>
      </div>
      
      `
    }
  }))
  .add('Side Panel - content blocks', withReadme(SidePanelMarkup.prettifiedMarkup, () => {
    return {
      components: { SidePanel },
      template: `
      <div class="layout layout--left">
        <side-panel class="layout__pre bg-light-blue clearfix"></side-panel>
        <main class="layout__main clearfix">
          <div class="bg-white content-block">
            <h2>test content</h2>
          </div>
        </main>
      </div>
      `
    }
  }))
  .add('Side Panel - content blocks right', withReadme(SidePanelMarkup.prettifiedMarkup, () => {
    return {
      components: { SidePanel },
      template: `
      <div class="layout layout--right">
        <side-panel class="layout__post bg-light-blue clearfix"></side-panel>
        <main class="layout__main clearfix">
          <div class="bg-white content-block">
            <h2>test content</h2>
          </div>
        </main>
      </div>
      `
    }
  }))