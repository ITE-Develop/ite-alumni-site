<script setup>
import {ref} from "vue";

defineProps({
  icon_dense: String,
  status: String,
  badge_background: String,
  badge: String,
  title: String,
  subtitle: String,
  time_value: String,
  image_status: String,
});

const isVisible = ref(true);

const toggleDisplay = () => {
  isVisible.value = !isVisible.value;
}

</script>

<template>
  <div v-if="isVisible" class="offcanvas-body">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-between">
        <div class="sb-badge" :style="badge_background">
          <div class="sb-badge--item">
            <div>{{ badge }}</div>
          </div>
        </div>
        <div @click="toggleDisplay" v-if="badge" class="cursor justify-content-end">
          <i class="sb-icon sb-icon-arrow-down" />
        </div>
      </div>
      <div class="offcanvas--title">
        {{ title }}
      </div>
      <div class="horizontal-bar mb-2" />
      <div class="offcanvas--time">
        <p class="offcanvas--time__value">{{ time_value }}</p>
      </div>
    </div>
    <div class="offcanvas--facility-status"><i class="sb-icon" v-bind:class="image_status" /></div>
  </div>

  <div v-else class="offcanvas-body">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-between">
        <div class="sb-badge" :style="badge_background">
          <div class="sb-badge--item">
            <div>{{ badge }}</div>
          </div>
        </div>
        <div @click="toggleDisplay" v-if="badge" class="cursor justify-content-end">
          <i class="sb-icon sb-icon-arrow-up" />
        </div>
      </div>
      <div class="offcanvas--title">
        {{ title }}
      </div>
      <div class="horizontal-bar mb-2" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/assets/scss/theme/default/_dense.scss");
</style>