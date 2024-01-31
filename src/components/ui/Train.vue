<script setup>
import { computed } from "vue";

const props = defineProps({
  train: {
    type: Object,
    default: () => { },
  },
});

const trainClassStatus = computed(() => ({
  "sb-icon-operation-md-delay": props.train?.is_delayed && !props.train?.is_stopped,
  "sb-icon-operation-md-stop": props.train?.is_stopped,
  "sb-icon-operation-md-normal":
    !props.train?.is_stopped && !props.train?.is_delayed,
}));

const trainIcon = computed(() => {
  switch (props.train.route_id) {
    case "jr_east_yamanote_line":
      return `sb-icon-symbol-yamanote`;
    case "jr_east_keihin_tohoku_line":
      return `sb-icon-symbol-keihin_tohoku`;
    case "yurikamome_yurikamome_line":
      return `sb-icon-symbol-yurikamome`;
    case "tokyo_asakusa_line":
      return `sb-icon-symbol-asakusa`;
    case "tokyo_oedo_line":
      return `sb-icon-symbol-oedo`;
    case "tokyo_monorail":
      return `sb-icon-symbol-tokyo_monorail`;
  }
  return `sb-icon-symbol-unknown`;
})

const trainStatus = computed(() => {
  if (props.train.is_stopped) {
    return "運転見合わせ";
  } else if (props.train.is_delayed) {
    return "遅延";
  } else {
    return "平常運転";
  }
});

const textColor = computed(() => ({
  "text-delay": props.train?.is_delayed && !props.train?.is_stopped,
  "text-stop": props.train?.is_stopped,
  "text-normal": !props.train?.is_stopped && !props.train?.is_delayed,
}));

</script>

<template>
  <div class="row-scroll single-col mw-150px">
    <div class="d-flex row-train-status">
      <i class="d-flex sb-icon sb-icon-min" :class="trainIcon"></i>
      <div class="d-flex">
        <p class="train-text d-flex text-wrap limit-text">{{ train.line_name }}</p>
      </div>
    </div>
    <div class="train-icon">
      <i class="sb-icon sb-icon-min sb-icon-top" :class="trainClassStatus"></i>
    </div>
    <div class="d-flex justify-content-center train-status">
      <p :class="textColor">{{ trainStatus }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/assets/scss/theme/default/_top.scss");
</style>