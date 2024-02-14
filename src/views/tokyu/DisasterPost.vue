<!--
<script setup>
import { SbDisasterPostList, SbSNSModal } from "@/components/ui/index";
import { SbSkeletonTwitterList } from "@/components/ui/skeleton/index";
import { useMetaTag } from "@/composables";
import ENV from "@/config/env";
import { useSNS } from "@/stores";
import { onMounted, reactive, ref } from "vue";
import vScroll from "@/components/directive/scroll";

const { all, isLoading } = useSNS();

const twitters = reactive({
  data: [],
  meta: {},
  now: ""
});

const currentPage = ref(1);
const prefix = ENV.APP_PREFIX;
const classWrapper = {
  [`${prefix}-train-wrapper`]: true,
};

const { setTitle } = useMetaTag();
setTitle("SNS災害投稿");

const updatePage = async (el) => {
  if (
    isLoading.value ||
    parseInt(el.scrollHeight) - parseInt(el.scrollTop + el.clientHeight) > 1000
  ) {
    return;
  }

  if (!twitters.meta.total) {
    return;
  }

  currentPage.value++;
  loadData({
    page: currentPage.value,
  });
};

const loadData = async (data = {}) => {
  const twitterRes = await all(data);
  if (!twitterRes?.data?.length) {
    return;
  }
  twitters.data = [...twitters.data, ...twitterRes.data];

  twitters.meta.per_page = twitterRes.meta?.pagination?.per_page || 0;
  twitters.meta.total = twitterRes.data.length || 0;

  if (twitters.data?.length > 0) {
    twitters.now = twitters.data[0].now;
  }
};

onMounted(() => {
  loadData();
});
</script>

<template>
  <main :class="classWrapper" v-scroll="updatePage">
    <div class="wrapper">
      <div class="header">
        <div class="main-title">
          <div class="h1 mb-1">SNS災害投稿</div>
          <div class="h3">港区周辺</div>
        </div>
        <div class="sns-note-wrapper">
          <p class="sns-note" data-bs-toggle="modal" href="#SNSModalToggle" role="button"><i class="sb-icon sb-icon-contact-support"></i>SNS注意点</p>
          <p>{{ twitters?.now }}</p>
        </div>
      </div>
      <div class="train">
        <template v-if="twitters.data?.length > 0">
          <SbDisasterPostList v-for="(twitter, index) in twitters.data" :key="index" :twitter="twitter" />
        </template>
        <template v-else>
          <SbSkeletonTwitterList v-for="index in 10" :key="index"></SbSkeletonTwitterList>
        </template>
      </div>
    </div>
  </main>
  <SbSNSModal/>
</template>
<style lang="scss" scoped>
.#{$prefix}train-wrapper {
  background-image: $light-gradient;
  letter-spacing: -0.41px;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  position: relative;

  .wrapper {
    width: inherit;
    .header {
      background-image: $blue-gradient;
      height: 280px;
      border-radius: 0 0 48px 48px;
      position: relative;
      padding: 32px 16px 0 16px;

      .sns-note-wrapper {
        color: $light;
        font-size: 14px;
        font-weight: 300;
        margin: 16px 0 0 0;
        line-height: 21px;
        display: flex;
        justify-content: space-between;

        .sns-note {
          display: flex;
          align-items: center;
          font-size: 12px;
          line-height: 18px;
          .sb-icon {
            margin-right: 4px;
          }
        }
      }
    }

    .main-title {
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

    .train {
      position: absolute;
      margin-top: -140px;
      margin-bottom: 16px;
      width: 100%;
    }
  }
}
</style>-->
