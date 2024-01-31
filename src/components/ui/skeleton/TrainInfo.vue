<template>
  <div class="train-wrapper">
    <div class="wrapper-inter">
      <div class="line">
        <div class="line-place">
          <i class="sb-loading sb-loading-lg sb-loading-circle"></i>
          <i class="line-name text-wrap sb-loading sb-loading-wlg sb-loading-line"></i>
        </div>
        <div class="line-status">
          <i class="status sb-loading sb-loading-wlg sb-loading-line"></i>
          <span class="sb-loading sb-loading-lg sb-loading-circle"></span>
        </div>
      </div>

      <div class="line-text-wrapper">
        <div class="line-text-inner">
          <p class="announce-line sb-loading sb-loading-wxl sb-loading-line"></p>
          <span class="sb-icon sb-icon-expand-more"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/theme/default/_train.scss";
</style>