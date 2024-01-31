<script setup>
import {computed, ref} from "vue";
import { useMapConfig } from "@/stores/index.js";

const props = defineProps({
  status: String,
  badge: String,
  title: String,
  location: String,
  time_value: String,
  water_level: String|Number,
  warning_level_title: String,
  warning_level__subtitle: String,
});

const { marker_symbol } = useMapConfig();

const isVisible = ref(true);

const toggleDisplay = () => {
  isVisible.value = !isVisible.value;
}

const getRiverBackground = computed(() => {
  if (props.status === marker_symbol.water_level.normal) {
    return 'background--normal';
  }
  if (props.status === marker_symbol.water_level.danger) {
    return 'background--danger';
  }
  return '';
})

const getRiverImageStatus = computed(() => {
  if (props.status === marker_symbol.water_level.normal) {
    return 'sb-image-water-level-status--normal';
  }
  if (props.status === marker_symbol.water_level.danger) {
    return 'sb-image-water-level-status--danger';
  }
  return '';
});

</script>

<template>
  <div v-if="isVisible || !badge"  class="offcanvas-body" id="river">
    <div class="d-flex text-center offcanvas--badge-title align-items-center justify-content-between">
      <template v-if="badge">
        <div class="sb-badge" :class="getRiverBackground">
          <div class="sb-badge--item">
            {{ badge }}
          </div>
        </div>
      </template>

      <div @click="toggleDisplay" v-if="badge" class="cursor justify-content-end">
        <i class="sb-icon sb-icon-arrow-down" />
      </div>
    </div>

    <div class="offcanvas--location">
      <label class="offcanvas--location--text">{{ location }}</label>
    </div>
    <div class="horizontal-bar mt-2" />
    <div class="d-flex offcanvas--title">
      <label>現在水位：</label>
      <label>{{title}}</label>
    </div>
    <div class="offcanvas--time">
      <div class="offcanvas--time--text">観測時間：</div>
      <div class="offcanvas--time--text">{{ time_value }}</div>
    </div>

    <div v-if="getRiverImageStatus">
      <div class="offcanvas--facility-status"><i v-bind:class="getRiverImageStatus" /></div>
      <div class="offcanvas--warning-level">
        <div class="offcanvas--warning-level__title">{{ warning_level_title }}</div>
        <div class="offcanvas--warning-level__subtitle">{{ warning_level__subtitle }}</div>
        <i class="sb-icon sb-icon-warning_img" />
      </div>
    </div>
  </div>


  <div v-else class="offcanvas-body" id="river">
    <div class="d-flex text-center offcanvas--badge-title align-items-center justify-content-between">
      <template v-if="badge">
        <div class="sb-badge" :class="getRiverBackground">
          <div class="sb-badge--item">
            {{ badge }}
          </div>
        </div>
      </template>

      <div @click="toggleDisplay" class="cursor">
        <i class="sb-icon sb-icon-arrow-up" />
      </div>
    </div>
    <div class="offcanvas--location">
      <label class="offcanvas--location--text">{{ location }}</label>
    </div>
    <div class="horizontal-bar mt-2" />
  </div>

</template>

<style lang="scss" scoped>


@media screen and (max-height: 667px){
  .offcanvas-body {
    max-height: calc(98vh);
    top: 0;
    bottom: -19;
    background-image: linear-gradient(270deg, #EFF4F9 0%, #FFF 100%);
  }
}
</style>