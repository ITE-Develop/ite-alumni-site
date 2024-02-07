<script setup>

import {SideBar, TopNavbar} from "@/components/ui";
import {SbSkeletonTrainTop, SbSkeletonTwitterTop} from "@/components/ui/skeleton";
import {useI18n} from 'vue-i18n';
import {useMetaTag} from "@/composables";
import {useTrain, useSNS} from "@/stores";
import {onMounted, reactive} from "vue";

import ENV from "@/config/env.js";
import Home from "@/views/pages/Home.vue";

const {setTitle} = useMetaTag();

const {t} = useI18n();

const {all: allTrain} = useTrain();
const {all: allSNS, isLoading: isSNSLoading} = useSNS();

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
  const snsData = await allSNS({limit: 5});
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
      <Home/>
    </div>
  </main>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/theme/default/_top.scss";
</style>
