<template>
  <SectionWrap :small="small">
    <ListingWrap v-if="direction === 'left'">
      <ListItem cols="2of3">
        <slot name="main"/>
      </ListItem>
      <ListItem cols="1of3">
        <slot name="side"/>
      </ListItem>
    </ListingWrap>
    <ListingWrap v-if="direction === 'right'">
      <ListItem cols="1of3">
        <slot name="side"/>
      </ListItem>
      <ListItem cols="2of3">
        <slot name="main"/>
      </ListItem>
    </ListingWrap>
  </SectionWrap>
</template>

<script>
import ListingWrap from '../listing/ListingWrap.vue';
export default {
  components: { ListingWrap },
  props: {
    direction: {
      type: String,
      default: 'left',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
