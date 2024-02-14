
<script setup>
  import { useMetaTag } from "@/composables/index.js";
  import ENV from "@/config/env.js";
  import {onMounted} from "vue";

  const { setTitle } = useMetaTag();
  setTitle("プライバシーポリシー");

  const prefix = ENV.APP_PREFIX;
  const classWrapper = {
    [`${prefix}-legal-wrapper`]: true
  };

  onMounted(() => {
    const modalBackdrop = document.querySelector('.offcanvas-backdrop');
    if (modalBackdrop) {
      modalBackdrop.remove();
    }
  });
</script>

<template>
  <main :class="classWrapper">
    <div class="wrapper-inner">
      <p>
        ok
      </p>

      <h2>ok</h2>
      <p>
        ok
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/theme/default/term";
</style>