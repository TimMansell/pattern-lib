import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import BreadCrumbs from './BreadCrumbs.vue';

storiesOf('Breadcrumbs', module)
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
    'Level 1', () =>   ({
      components: { BreadCrumbs },
      template: `<bread-crumbs :level="1" />`
    })
  )
  .add(
    'Level 2',() =>   ({
      components: { BreadCrumbs },
      template: `<bread-crumbs :level="2" />`
    })
  )
  .add(
    'Level 3', () =>   ({
      components: { BreadCrumbs },
      template: `<bread-crumbs :level="3" />`
    })
  );
