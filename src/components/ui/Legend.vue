<script setup>
import {makeLegendProps} from "@/composables/useProps";
import { onUnmounted, ref } from 'vue';

const legendRef = ref();

const titleRef = ref("");
const water_levelRef = ref("");
const water_level_statusRef = ref("");
const sourceRef = ref("");
const subtitleRef = ref("");

const props = defineProps({
  ...makeLegendProps(),
});

const show = () => {
  display.value = true;
}

const hide = () => {
  display.value = false;
}

const toggle = () => {
  display.value = !display.value;
}

const updateContent = ({ title, subtitle, water_level,water_level_status,source_text, }) => {
  titleRef.value = title;
  subtitleRef.value = subtitle;
  water_levelRef.value = water_level;
  water_level_statusRef.value = water_level_status;
  sourceRef.value = source_text;
}

onUnmounted(() => {

});



const display =  ref(false);

const displayicon = ref(false);
const  toggleDisplay = () => {
  displayicon.value = !displayicon.value;
}

defineExpose({
  show, hide, toggle, updateContent,
});
</script>

<template>
  <div class="top sb-legend d-flex flex-column z-0" :id="id" ref="legendRef" v-if="display" >
    <div class="d-flex title-flood justify-content-between text-flood">{{titleRef}}</div>
    <div v-if="subtitleRef" class="subtitle">{{subtitleRef}}</div>
    <div class="d-flex hazard-hanrei">
      <i class="sb-icon" v-bind:class="water_levelRef"/>
    </div>
    <div class="horizontal-bar"/>
    <div @click="toggleDisplay" v-if="!displayicon" class="cursor mx-auto my-1">
      <i class="sb-icon sb-icon-expand-more" />
    </div>
    <div v-if="displayicon" class="sb-legend-expand" >
      <i class="sb-icon floor_image " v-bind:class="water_level_statusRef" />
      <div class="horizontal-bar"/>
      <div class="d-flex legend-expand-text">
        出典：
        <div>{{sourceRef}}</div>
      </div>
      <div class="horizontal-bar mt-2"/>
      <div @click="toggleDisplay" class="cursor mt-1">
        <i class="mx-auto sb-icon sb-icon-expand-less" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/assets/scss/theme/default/_legend.scss");
</style>