<script setup>
import {ref} from "vue";

const emit = defineEmits(['on-show']);
const isVisible = ref(true);

const props = defineProps({
  status: String,
  badge: String,
  title: String,
  location: String,
  time_value: String,
  warning_level_title: String,
  warning_level__subtitle: String,
  evacuation_target: String,
  status_system: String,
  url: String,
  description: String,
  openHelper: Function,
});

const toggleDisplay = () => {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <div v-if="isVisible || !evacuation_target" class="offcanvas-body" id="evacuation">
    <div class="d-flex offcanvas--badge-title align-items-start justify-content-between">
      <div class="offcanvas--title">{{title}}</div>
      <div @click="toggleDisplay" v-if="badge" class="cursor justify-content-end">
        <i v-if="evacuation_target" class="sb-icon sb-icon-arrow-down" />
    </div>
    </div>
    <div class="horizontal-bar" />
    <div @click="openHelper" class="d-flex offcanvas--helper">
      <div class="offcanvas--helper--text">{{location}}</div>
      <i class="sb-icon sb-icon-evacuation--more-info"/>
    </div>
    <div v-if="evacuation_target">
      <div>
        <div class="offcanvas--type">現在の開設状況</div>
        <a class="d-flex text-decoration-none" target="_blank" :href="url">
          <div class="offcanvas--helper--text">{{status_system}}</div>
          <i class="sb-icon sb-icon-other ms-1"/>
        </a>
      </div>
      <div>
        <div class="offcanvas--type">{{evacuation_target}}</div>
        <div>{{description}}</div>
      </div>
    </div>
  </div>

  <div v-else class="offcanvas-body" id="evacuation">
    <div class="d-flex offcanvas--badge-title align-items-start justify-content-between">
      <div class="offcanvas--title">{{title}}</div>

      <div @click="toggleDisplay" v-if="badge" class="cursor justify-content-end">
        <i class="sb-icon sb-icon-arrow-up" />
      </div>
    </div>
    <div class="horizontal-bar" />
  </div>
</template>

<style lang="scss" scoped>
.offcanvas{
  &--helper{
    margin-top: $BasicSmall;
    margin-bottom: $BasicXSmall;
    &--text{
      color: $text-color-link;
      font-size: $bold-font-size;
      font-style: normal;
      font-weight: $font-weight-normal;
      line-height: normal;
      margin-right: $BasicXSmall;
    }
  }
  &--title {
    color: $text-color-primary;
    font-size: $h2-font-size;
    font-style: normal;
    font-weight: $font-weight-bold;
    line-height: normal;

    overflow: hidden;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 0;
    margin-top: 0;
  }
  &--type{
    color: $text-color-primary;
    font-size: $bold-font-size;
    font-style: normal;
    font-weight: $font-weight-bold;
    line-height: normal;
    margin-top: $BasicSmall;
    margin-bottom: $BasicXSmall;
  }
  &--announcement{
    color: $text-color-secondary;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: $BasicSmall;
  }
}
.offcanvas-body{
  padding-bottom: $BasicRegular;
}
</style>