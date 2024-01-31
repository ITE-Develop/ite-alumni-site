<script setup>

import { defineAsyncComponent } from "vue";
import ENV from "@/config/env";
const prefix = ENV.APP_PREFIX;

const AccessLayout = defineAsyncComponent(() => import("@/views/layout/AccessLayout.vue"));

document.querySelector('body').classList.add(`${prefix}-defaultlayout`);

</script>

<template>
  <Suspense>
    <AccessLayout />
  </Suspense>
  <Suspense>
    <router-view />
  </Suspense>
</template>