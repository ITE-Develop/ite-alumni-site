<script setup>
import {TopNavbar} from "@/components/ui";
import News from "@/components/ui/News.vue";
import CountDown from "@/components/ui/CountDown.vue";
</script>

<template>
  <div class="top">
    <TopNavbar/>
    <div class="content">
      <CountDown/>
      <News/>
      <News/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-navbar-scrolling {
  position: fixed;
  width: calc(100% - 40px);
  z-index: 1000; /* Ensure navbar stays on top of other content */
}

.scrolled-down {
  transform: translateY(-100%);
  transition: all 0.3s ease-in-out;
}

.scrolled-up {
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
}
</style>
