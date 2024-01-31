<script setup>

import TopNarbar from "@/components/ui/TopNarbar.vue";
</script>

<template>
  <div class="fixed-navbar">
    <TopNarbar/>
  </div>
<div class="content">
  <div>
    Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12. Breakpoints are also representative of a subset of common device sizes and viewport dimensions—they don’t specifically target every use case or device. Instead, the ranges provide a strong and consistent foundation to build on for nearly any device.
  </div>
</div>
</template>

<style lang="scss" scoped>
.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.content {
  height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
  margin-top: 176px; /* Adjust this value based on the height of your fixed Navbar */
  padding: 20px; /* Add padding to prevent content from being hidden under the fixed Navbar */
  overflow-y: auto; /* Make the content area scrollable when needed */
}
</style>