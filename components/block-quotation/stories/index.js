import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import BlockQuotationDefault from './BlockQuotationDefault.vue';
import BlockQuotationWithBorders from './BlockQuotationWithBorders.vue';
import BlockQuotationNoAuthor from './BlockQuotationNoAuthor.vue';
import BlockQuotationAltBg from './BlockQuotationAltBg.vue';
import BlockQuotationInverted from './BlockQuotationInverted.vue';
import BlockQuotationInvertedWithBorders from './BlockQuotationInvertedWithBorders.vue';
import BlockQuotationRaw from './BlockQuotationRaw.vue';
import BlockQuotationLong from './BlockQuotationLong.vue';

storiesOf('Block Quotation', module)
  .add('Default', createStory(BlockQuotationDefault))
  .add('With borders', createStory(BlockQuotationWithBorders))
  .add('Without author', createStory(BlockQuotationNoAuthor))
  .add('Long', createStory(BlockQuotationLong))
  .add('Light background', createStory(BlockQuotationAltBg))
  .add('Inverted', createStory(BlockQuotationInverted))
  .add('Inverted with borders', createStory(BlockQuotationInvertedWithBorders))
  .add('Raw (no classes)', createStory(BlockQuotationRaw));
