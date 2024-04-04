<script setup>
import { TopNavbar } from "@/components/ui";
import News from "@/components/ui/News.vue";
import CountDown from "@/components/ui/CountDown.vue";
import Projects from "@/components/ui/Projects.vue";
import Lectures from "@/components/ui/Lecturer.vue";
import Profile from "@/components/ui/ProfileFour.vue";
</script>

<template>
  <div class="top">
    <TopNavbar />
    <div class="content">
      <div class="h-100"></div>
      <CountDown />
      <div class="display">
        <News />
        <Projects />
      </div>
      <Profile />
      <Lectures />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.display {
  display: flex;
  justify-content: space-between;
}

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

//small screen than 1280px
@media screen and (max-width: 1280px) {
  .display {
    flex-direction: column;
  }
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
