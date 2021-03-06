<template>
  <component
    :is="element"
    :class="classes"
    :href="isLink && href"
    :aria-disabled="isLink && disabled ? 'true': false"
    :disabled="!isLink && disabled"
  >
    <span
      v-if="!noIcon"
      :class="`push-icon${top ? ' push-icon--top' : ''}`">
      <slot/>
      <SvgIcon
        :name="icon"
        class="push-icon__icon"
        width="15px"
        height="15px" />
    </span>
    <slot v-if="noIcon"/>
  </component>
</template>

<script>
// Must import icon because `ButtonIcon` is used in `CheckList`, which is included in `lib` target
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: { SvgIcon },
  props: {
    href: {
      type: String,
      default: '#',
    },
    icon: {
      type: String,
      default: 'chevron-right',
    },
    size: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    noIcon: {
      type: Boolean,
      default: false,
    },
    element: {
      type: String,
      default: 'a',
      validator: val => ['a', 'button', 'div', 'span'].indexOf(val) !== -1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'btn',
        {
          [`btn--${this.size}`]: ['sml', 'xsml'].includes(this.size),
          [`btn--${this.width}`]: ['wide', 'xwide', 'fullwidth'].includes(this.width),
          'btn--inverted': this.inverted,
          'btn--disabled': this.disabled,
        },
      ];
    },
    isLink() {
      return this.element === 'a';
    },
  },
};
</script>
