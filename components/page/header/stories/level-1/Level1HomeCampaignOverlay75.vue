<template>
  <div
    class="page-header__darken--o75 page-header--campaign"
    style="background-image: url(https://placeimg.com/990/530/arch/1)">
    <header class="page-header page-header--l1">
      <div class="page-header__inner max">
        <a
          class="link-img link-reset page-header__logomat"
          href="https://www.unimelb.edu.au/">
          <img
            class="page-header__logo"
            src="../../../../shared/logo.svg"
            width="117"
            height="117"
            alt="The University of Melbourne homepage"
          >
        </a>
      </div>
      <div class="page-header--center">
        <div class="max max--xsml text-center shim-pb2">
          <h1 class="shim-mb1">Talent for every<br>possible outcome</h1>
          <h3 class="shim-mb2">Further details about this amazing campaign.</h3>
          <a
            class="btn btn--inverted"
            href=""><span class="push-icon">Call to action <svg
              width="15px"
              height="15px"
              focusable="false"
              role="presentation"
              class="push-icon__icon"><use xlink:href="#icon-chevron-right" /></svg></span></a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import CardPathfinder from '../../../../cards/CardPathfinder.vue';

export default {
  components: { CardPathfinder },
};
</script>
