<template>
  <PageBreadcrumbs :items="items" />
</template>

<script>
import PageBreadcrumbs from '../PageBreadcrumbs.vue';

export default {
  components: { PageBreadcrumbs },
  data: () => ({
    items: [
      { href: '/', text: 'About us' },
    ],
  }),
};
</script>
