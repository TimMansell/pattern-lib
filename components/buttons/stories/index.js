import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  object,
  select,
  color,
  date,
} from '@storybook/addon-knobs';

import ButtonIcon from './ButtonIcon.vue';
import ButtonLink from './ButtonLink.vue';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Button with icon', () => {
    const btnText = text('Button Text', 'Button with icon');
    return {
      components: { ButtonIcon },
      template: `<button-icon>${btnText}</button-icon>`
    }
  })
  .add('Button with icon (as button element)', () => {
    const btnText = text('Button Text', 'Button with icon');
    return {
      components: { ButtonIcon },
      template: `<button-icon element="button">${btnText}</button-icon>`
    }
  })
  .add('Button without icon', () => {
    const btnText = text('Button Text', 'Button without icon');
    return {
      components: { ButtonLink },
      template: `<button-link href="#" class="btn--sml">${btnText}</button-link>`
    }
  })
  .add('Button as button element', () => {
    const btnText = text('Button Text', 'Button without icon as a button');
    return {
      components: { ButtonLink },
      template: `<button-link element="button">${btnText}</button-link>`
    }
  })
  .add('Button small', () => {
    const btnText = text('Button Text', 'I am a small button');
    const icons = select('Icon', ['chevron-right', 'close'], 'chevron-right' );
    return {
      components: { ButtonIcon },
      template: `<button-icon icon="${icons}" class="btn--sml">${btnText}</button-icon>`
    }
  })
  .add('Button extra small', () => {
    const btnText = text('Button Text', 'I am a really small button');
    const icons = select('Icon', ['chevron-right', 'close'], 'chevron-right' );
    return {
      components: { ButtonIcon },
      template: `<button-icon icon="${icons}" class="btn--xsml">${btnText}</button-icon>`
    }
  })
  .add('Button wide', () => {
    const btnText = text('Button Text', 'I am a wide button');
    const icons = select('Icon', ['chevron-right', 'close'], 'chevron-right' );
    return {
      components: { ButtonIcon },
      template: `<button-icon icon="${icons}" class="btn--wide">${btnText}</button-icon>>`
    }
  })
  .add('Button extra wide', () => {
    const btnText = text('Button Text', 'I am a really wide button');
    const icons = select('Icon', ['chevron-right', 'close'], 'chevron-right' );
    return {
      components: { ButtonIcon },
      template: `<button-icon icon="${icons}" class="btn--xwide">${btnText}</button-icon>`
    }
  })
  .add('Button full width', () => {
    const btnText = text('Button Text', 'I am a button that stretches to the width of the container');
    const icons = select('Icon', ['chevron-right', 'close'], 'chevron-right' );
    return {
      components: { ButtonIcon },
      template: `<button-icon icon="${icons}" class="btn--fullwidth">${btnText}</button-icon>`
    }
  })