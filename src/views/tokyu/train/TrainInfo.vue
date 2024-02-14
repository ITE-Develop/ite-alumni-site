<!--

<script setup>
import { SbTrainInfo } from "@/components/ui";
import { SbSkeletonTrainInfo } from "@/components/ui/skeleton";
import { useMetaTag } from "@/composables";
import ENV from "@/config/env";
import { useTrain } from "@/stores";
import { onMounted, reactive } from "vue";

const prefix = ENV.APP_PREFIX;
const { all } = useTrain();

const { setTitle } = useMetaTag();

setTitle("電車運行情報");

const state = reactive({
  trainData: [],
  updateTimestamp: "",
});

onMounted(async () => {
  const train = await all();
  state.trainData = train.data;
  if (state.trainData.length > 0) {
    state.updateTimestamp = train.data[0].current_timestamp;
  }
})

const classWrapper = {
  [`${prefix}-train-wrapper`]: true,
};
</script>

<template>
  <main :class="classWrapper">
    <div class="wrapper">
      <div class="header-inner">
        <div class="main-title">
          <div class="h1 mb-1">電車運行情報</div>
          <div class="h3">竹芝・浜松町エリア周辺</div>
        </div>
      </div>
      <div class="train">
        <template v-if="state.trainData.length > 0">
          <SbTrainInfo v-for="(train, index) in state.trainData" :key="index" :train="train" />
        </template>
        <template v-else>
          <sb-skeleton-train-info v-for="(index) in 6" :key="index"></sb-skeleton-train-info>
        </template>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.#{$prefix}train-wrapper {
  height: 100%;
}

.wrapper {
  height: 100%;
  background-image: linear-gradient(to right, #FFFFFF, #EFF4F9);
  overflow: auto;
  position: relative;

  .train {
    position: absolute;
    margin-top: -168px;
    margin-bottom: 16px;

    width: 100%;
  }

  .header-inner {
    background-image: linear-gradient(to right, #3DB8CB, #3D87CB);
    height: 280px;
    border-radius: 0 0 48px 48px;
    position: relative;
  }

  .main-title {
    padding-top: $BasicLarge;

    .h1 {
      color: $light;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      display: flex;
      justify-content: center;
    }

    .h3 {
      color: $light;
      font-size: 16px;
      font-weight: 600;
      margin: 0;
      line-height: 24px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
-->
