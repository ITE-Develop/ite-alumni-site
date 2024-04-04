<script setup>
import {TopNavbar} from "@/components/ui";
import News from "@/components/ui/News.vue";
import CountDown from "@/components/ui/CountDown.vue";
import Projects from "@/components/ui/Projects.vue";
</script>

<template>
  <div class="top">
    <TopNavbar/>
    <div class="content">
      <div class="h-100"></div>
      <CountDown/>
      <div class="d-flex">
        <News/>
        <Projects/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vertical-line-top {
  width: 1px;
  height: 100%;
}
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

@media screen and (max-width: 768px) {
  .top {
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .top {
    width: 100%;
  }
}
</style>
