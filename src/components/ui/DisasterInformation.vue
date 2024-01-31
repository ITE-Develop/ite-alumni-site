<script setup>

import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useTopPage } from "@/composables/index.js";

const router = useRouter();
const { t } = useI18n();
const { disaster_information }  = useTopPage();

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

  <div class="scroll-menu-info">
  <div v-for="(item, index) in disaster_information" :key="index" class="grid-item-info grid-margin" @click="() => onDPClick(item.button.link, item.button.query)">
  <div class="row row-scroll single-col">
    <div class="h-100 d-flex flex-column text-center pending-item-info grid-info-list">
      <div class="sb-icon sb-icon-lg">
        <i class="sb-icon sb-icon-lg" v-bind:class="item.button.icon"></i>
      </div>
      <div class="text-info-button">{{ item.button.label }}</div>
    </div>
  </div>
  </div>
  </div>
</template>


<style lang="scss" scoped>
.pending-item-info {
  padding-top: $BasicSmall;
  padding-bottom: $BasicSmall;
}

.scroll-menu-info div {
  display: inline-block;
  overflow: visible;
}

.scroll-menu-info {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  /* Hide scrollbar for Chrome, Safari and Opera */
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */

  padding-bottom: $BasicLarge;
  padding-left: 1px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scroll-menu-info::-webkit-scrollbar {
  display: none;
}

.single-col {
  overflow-y: visible;
  background-color: $button-color-secondary;
  margin: 0 $BasicXSmall 0 0;
  border-radius: $border-radius-large;
  box-shadow: $box-shadow-primary;
  display: flex;
  width: 100px;
  height: 100px;
  padding: $BasicSmall 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: $BasicXSmall;
  flex-shrink: 0;
}

.row-scroll {
  margin-inline-start: 0;
  gap: 10px;
  justify-content: space-between;
}

.text-info-button {
  margin-top: $BasicXSmall;
  color: $text-color-primary;
  text-align: center;
  font-size: $normal-font-size;
  font-style: normal;
  font-weight: $font-weight-normal;
  line-height: normal;
}
</style>