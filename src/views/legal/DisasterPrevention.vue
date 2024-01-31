
<script setup>
import { useMetaTag } from "@/composables/index.js";
import ENV from "@/config/env.js";

const { setTitle } = useMetaTag();
setTitle("アプリケーションプライバシーポリシー");

const prefix = ENV.APP_PREFIX;
const classWrapper = {
  [`${prefix}-legal-wrapper`]: true
};

</script>

<template>
  <main :class="classWrapper">
    <div class="wrapper-inner">
      <div class="content">
        <p class="top-content">
          この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）
          がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）
          の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）
          には，本規約に従って，本サービスをご利用いただきます。
        </p>
      </div>
      <div class="content">
        <h2>第1条（適用）</h2>
        <p>本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>
        <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。</p>
        <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。</p>
        <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。</p>
        <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。</p>
      </div>
      <div class="content">
        <h2>第2条（利用登録）</h2>
        <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。</p>
        <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。</p>
        <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。</p>
        <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。</p>
        <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。</p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/theme/default/term";
</style>