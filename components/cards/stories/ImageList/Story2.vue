<template>
  <SectionWrap
    :style="{ backgroundImage: 'url(https://about-us-unimelb.netlify.com/images/UoM-soft-3.png)' }"
    small
    bg-color="inverted">
    <CardFocusImageList
      element="div"
      color="white"
      full-img
      tight
      hero
      titleabove
      img="https://about-us-unimelb.netlify.com/images/history.jpg"
      title="Postera crescam laude"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ullam quisquam nihil. At ducimus explicabo quidem distinctio magnam voluptas totam, repudiandae voluptatem aliquid consequuntur cupiditate, voluptates! In quis ratione laborum?
    </CardFocusImageList>
  </SectionWrap>
</template>

<script>
import CardFocusImageList from '../../CardFocusImageList.vue';
import heroImageDocs from './hero-image-docs.md';

export default {
  components: { CardFocusImageList },
  readme: { custom: heroImageDocs },
};
</script>
