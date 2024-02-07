<template>


  <div class="second-navbar" :class="{ 'sticky': sticky }">
<div class="row top-navbar justify-content-between">
      <div class="col-md-2 logo">
        <i class="ite-icon ite-icon-ite-alumni"/>-->
      </div>

      <div class="col-md-5 contact d-flex">
        <div class="d-flex">
          <i class="ite-icon ite-icon-call me-3"/>
          <div class="d-flex flex-column call-phone">
            <div class="call">Call</div>
            <div class="phone-number">096 328 499 5</div>
          </div>
        </div>
        <div class="d-flex">
          <i class="ite-icon ite-icon-mail me-3"/>
          <div class="d-flex flex-column call-phone">
            <div class="call">Email</div>
            <div class="phone-number">fe.info@rupp.edu.kh</div>
          </div>
        </div>

        <div class="d-flex">
          <i class="ite-icon ite-icon-location me-3"/>
          <div class="d-flex flex-column call-phone">
            <div class="call">Address</div>
            <div class="phone-number">Toul Kork, Phnom Penh</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("@/assets/scss/components/_navbar.scss");
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['sticky']);
</script>