<script setup>

import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useTopPage } from "@/composables/index.js";
const router = useRouter();
const { t } = useI18n();
const { disaster_prevention } = useTopPage();

const onDPClick = (link, query = {}) => {
  if (!link) {
    return;
  }
  if (link.includes('http')) {
    window.open(link, '_blank');
    return;
  }
  router.push({ path: link, query: query ?? {} })
};

</script>

<template>
  <div class="grid-container">
    <div v-for="(item, index) in disaster_prevention" :key="index" class="grid-item" @click="() => onDPClick(item.button.link, item.button.query)">
      <div class=" h-100 d-flex flex-column text-center pending-item">
        <div class="sb-icon sb-icon-xl">
          <i class="sb-icon sb-icon-xl" v-bind:class="item.button.icon"></i>
        </div>
        <div class="text-top-button">{{ item.button.label }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  gap: 1px;
  grid-auto-flow: column;
  align-items: center;
  overflow: visible;
  justify-items: center;
  border-radius: $border-radius-xlarge;
  box-shadow: $box-shadow-primary;
  backdrop-filter: blur(12px);
  background-color: $button-color-secondary;
  position: relative;
  /* Required for pseudo-elements */

  margin-bottom: $BasicLarge;
}

/* Style horizontal gap line */
.grid-container::before {
  position: absolute;
  top: 50%;
  left: auto;
  right: auto;
  height: 1px;
  /* Adjust the thickness of the line */
  background-color: $border-color-secondary;
  /* Color of the horizontal gap line */
  transform: translateY(-50%);
  width: 300px;
  align-items: center;
  content: "";
}

/* Style vertical gap line */
.grid-container::after {
  content: "";
  height: 180px;
  position: absolute;
  top: auto;
  bottom: auto;
  left: 50%;
  width: 1px;
  /* Adjust the thickness of the line */
  background-color: $border-color-secondary;
  /* Color of the vertical gap line */
  transform: translateX(-50%);
}

.grid-item {
  height: 101px;
  width: 171px;
}

.grid-item:nth-child(4) {
  grid-row: 2;
  grid-column: 2;
}

.grid-top-list {
  height: 101px;
  width: 171px;
}

.pending-item {
  padding: 12px 0;
}

.text-top-button {
  margin-top: $BasicSmall;
  color: $text-color-primary;
  text-align: center;
  font-size: $normal-font-size;
  font-style: normal;
  font-weight: $font-weight-bold;
  line-height: normal;
}
</style>