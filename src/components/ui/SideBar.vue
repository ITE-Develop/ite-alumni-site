<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
<div class="fixed-sidebar">
  <div class="d-flex flex-column sidebar">
     <div class="d-flex justify-content-center align-items-center">
    <i class="ite-icon ite-icon-rupp avatar"/>
     </div>
  <div class="d-flex flex-column align-items-center icon-left-navbar">
    <div class="d-flex justify-content-center align-items-center">
      <i class="ite-icon ite-icon-home"/>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <i class="ite-icon ite-icon-home"/>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <i class="ite-icon ite-icon-home"/>
    </div>
  </div>
  </div>
    </div>
</template>
<style lang="scss" scoped>
.content {
  margin-left: 80px; /* Adjust this value based on the width of your fixed Sidebar */
  padding: 20px; /* Add padding to prevent content from being hidden under the fixed Sidebar */
}
.left-navbar {
  margin-left: 80px; /* Adjust this value based on the width of your fixed Sidebar */
}
.fixed-sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 80px; /* Maintain the width of your existing Sidebar */
}
.sidebar{
  width: 80px;
}
.icon-left-navbar {
  margin-top: 76px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 100px;
}

.left-navbar {
  background: $light;
}

.avatar {
  margin-top: 30px;
  border-radius: 50%;
  width: 56px;
  height: 56px;
}

.header-inner {
  background-image: $blue-gradient;
  border-radius: 0 0 $border-radius-xlarge $border-radius-xlarge;
  position: relative;
}

.main-title {
  padding-top: $BasicRegular;
  padding-bottom: $BasicRegular;

  .h1 {
    color: $light;
    font-weight: $font-weight-bold;
    font-size: $h1-font-size;
    line-height: 36px;
    display: flex;
    justify-content: start;
  }

  .h3 {
    color: $light;
    font-size: $h3-font-size;
    font-weight: $font-weight-bold;
    margin: 0;
    line-height: 24px;
    display: flex;
    justify-content: center;
  }
}
</style>