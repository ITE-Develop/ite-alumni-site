
<script setup>
  import { useMetaTag } from "@/composables/index.js";
  import ENV from "@/config/env.js";

  const { setTitle } = useMetaTag();
  setTitle("利用規約");

  const prefix = ENV.APP_PREFIX;
  const classWrapper = {
    [`${prefix}-legal-wrapper`]: true,
  };
</script>

<template>
  <main :class="classWrapper">
    <div class="wrapper-inner">
      <p>
        ok
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/theme/default/term";
</style>