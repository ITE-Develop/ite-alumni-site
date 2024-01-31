<script setup>
import { ref, computed } from "vue";

const isElementVisible = ref(false);

const toggleElement = () => {
  isElementVisible.value = !isElementVisible.value;
};

const props = defineProps({
  train: {
    type: Object,
    default: () => {},
  },
});

const trainClassStatus = computed(() => ({
  "sb-icon-operation-delay": props.train?.is_delayed && !props.train?.is_stopped,
  "sb-icon-operation-stop": props.train?.is_stopped,
  "sb-icon-operation-normal":
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
  <div class="train-wrapper">
    <div class="wrapper-inter">
      <div class="line">
        <div class="line-place">
          <i class="sb-icon sb-icon-min" :class="trainIcon"></i>
          <i class="line-name text-wrap">{{ train.line_name }}</i>
        </div>
        <div class="line-status">
          <i class="status" :class="textColor">{{ trainStatus }}</i>
          <span class="sb-icon sb-icon-md" :class="trainClassStatus"></span>
        </div>
      </div>
      
      <div class="line-text-wrapper">
        <div class="line-text-inner">
          <p class="announce-line" v-if="train.received_timestamp">配信時間　{{ train.received_timestamp }}</p>
          <p class="announce-line" v-else>運休・遅延情報はありません</p>

          <div class="ps-4" @click="toggleElement">
              <span v-show="isElementVisible" class="sb-icon sb-icon-expand-less"></span>
              <span v-show="!isElementVisible" class="sb-icon sb-icon-expand-more"></span>
          </div>
        </div>
        <div>
          <p v-show="isElementVisible" v-if="train.text" class="line-text">{{ train.text }}</p>
        <div class="other-text-wrapper">
          <a v-show="isElementVisible" class="other-text" :href="train.link" target="_blank">路線公式情報</a>
          <i v-show="isElementVisible" class="sb-icon sb-icon-other"></i>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/theme/default/_train.scss";
</style>