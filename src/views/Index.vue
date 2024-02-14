<script setup>

import {SideBar, TopNavbar} from "@/components/ui";
import {SbSkeletonTrainTop, SbSkeletonTwitterTop} from "@/components/ui/skeleton";
import {useI18n} from 'vue-i18n';
import {useMetaTag} from "@/composables";
// import {useTrain, useSNS} from "@/stores";
import {onMounted} from "vue";

import ENV from "@/config/env.js";
import Top from "@/views/pages/Top.vue";
import {useLecturerRandom, useRef} from "@/stores/index.js";
const { TopRef } = useRef();

const {setTitle, setMetaTags} = useMetaTag();



const {t} = useI18n();

const {all} = useLecturerRandom();

const prefix = ENV.APP_PREFIX;
const classWrapper = {
  [`${prefix}-top-wrapper`]: true,
};


setTitle("ITE G7 Alumni");
setMetaTags({
  'og:title': 'ITE G7 Alumni',
  'og:description': 'ITE G7 Alumni For All ITE G7 Students and Alumni to connect and share their experiences and knowledge.',
  'og:image': 'https://ite.decapsoul.one/ite-f711fe9c.min.svg',
  'telegram:title': 'ITE G7 Alumni',
  'telegram:description': 'ITE G7 Alumni For All ITE G7 Students and Alumni to connect and share their experiences and knowledge.',
});
</script>

<template>
  <main :class="classWrapper">
    <div class="wrapper" id="wrapper">
      <Top ref="TopRef"/>
    </div>
  </main>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/theme/default/_top.scss";
.top-navbar {
  transition: transform 0.3s ease-in-out;
}

.scrolled {
  transform: translateY(-100%);
}

@media screen and (max-width: 768px) {
  .#{$prefix}top-wrapper {
    display: block;
  }
}

@media screen and (min-width: 768px) {
  .#{$prefix}top-wrapper {
    display: block;
  }
}

  @media screen and (max-width: 576px) {
    .#{$prefix}top-wrapper {
      display: block;
    }
  }
</style>
