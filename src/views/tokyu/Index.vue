<script setup>

import { SbTrainStatus, SbTwitterPost, SbDisasterPrevention, SbDisasterInformation } from "@/components/ui";
import { SbSkeletonTrainTop, SbSkeletonTwitterTop } from "@/components/ui/skeleton";
import { useI18n } from 'vue-i18n';
import { useMetaTag } from "@/composables";
import { useTrain, useSNS } from "@/stores";
import { onMounted, reactive } from "vue";

import ENV from "@/config/env.js";

const { setTitle } = useMetaTag();

const { t } = useI18n();

const { all: allTrain } = useTrain();
const { all: allSNS, isLoading: isSNSLoading } = useSNS();

const prefix = ENV.APP_PREFIX;
const classWrapper = {
  [`${prefix}-top-wrapper`]: true,
};
const state = reactive({
  train: [],
  twitter: [],
});

setTitle("ite");

const fetchTrainData = async () => {
  const trainData = await allTrain();
  state.train = trainData?.data;
};

const fetchSNSData = async () => {
  const snsData = await allSNS({ limit: 5 });
  state.twitter = snsData?.data ?? [];
};

onMounted(() => {
  fetchTrainData();
  fetchSNSData();
});

</script>

<template>
  <main :class="classWrapper">
    <div class="wrapper">
      <div class="header-inner">
        <div class="main-title">
          <h1 class="text-center h1">{{ t('top.title') }}</h1>
        </div>
        <div class="margin">
          <SbDisasterPrevention />
        </div>
        <div class="ms-3">
          <div class="container-card d-flex gx-2 title-menu me-3">
            <h2 class="title-info col ">{{ t('top.weather_info_title') }}</h2>
          </div>
          <SbDisasterInformation />
          <div class="container-card d-flex gx-2 title-menu justify-content-between me-3">
            <h2 class="d-flex title-info col ">{{ t('top.train_service_title') }}</h2>
            <div class="d-flex flex-row more">
              <router-link class="text-decoration-none" :to="{ name: 'tokyu.train-info' }">{{ t('top.see_all')
                }}</router-link>
              <img class="my-1" src="@/assets/icons/forward_arrow.svg" alt="forward_arrow">
            </div>
          </div>
          <div class="scroll-menu">
            <template v-if="state.train.length > 0">
              <SbTrainStatus v-for="(train, index) in state.train" :key="index" :train="train" />
            </template>
            <template v-else>
              <sb-skeleton-train-top v-for="index in 6" :key="index"></sb-skeleton-train-top>
            </template>
          </div>
          <div class="container-card d-flex gx-2 title-menu justify-content-between me-3">
            <h2 class="title-info ">{{ t('top.sns') }}</h2>
            <div class="d-flex flex-row more" v-if="isSNSLoading || state.twitter.length > 0">
              <router-link class="text-decoration-none" :to="{ name: 'tokyu.disaster-post' }">{{ t('top.see_all')
                }}</router-link>
              <img class="" src="@/assets/icons/forward_arrow.svg" alt="forward_arrow">
            </div>
          </div>
          <div class="scroll-menu-twitter">
            <template v-if="!isSNSLoading">
              <template v-if="state.twitter.length > 0">
                <SbTwitterPost v-for="(twitter, index) in state.twitter" :key="index" :twitter="twitter" />
              </template>
              <div v-else class="no-sns">
                現在、災害投稿はありません。
              </div>
            </template>
            <template v-else>
              <SbSkeletonTwitterTop v-for="index in 5" :key="index"></SbSkeletonTwitterTop>
            </template>
          </div>
          <div class="footer justify-content-start">
            <router-link :to="{ name: 'legal.term-of-use' }" class="text-start footer-text col-2">{{ t('top.term')
              }}</router-link>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/theme/default/_top.scss";
</style>
