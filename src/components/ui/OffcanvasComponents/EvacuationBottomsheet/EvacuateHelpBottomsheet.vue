<script setup>

import {onMounted, onUnmounted, reactive, ref} from "vue";
import {makeOffcanvasProps} from "@/composables/useProps.js";
import {Offcanvas} from "bootstrap";

const helperRef = ref();

let bsOffcanvas = null;

const props = defineProps({
  ...makeOffcanvasProps(),
});

const data = reactive({
  title: "",
  description: "",
  image: "",
  onClose: () => {}
});

const show = () => {
  Offcanvas.getOrCreateInstance(
      document.querySelector("#" + props.id)
  ).show();
}

const hide = () => {
  Offcanvas.getOrCreateInstance(
      document.querySelector("#" + props.id)
  ).hide();
}

const toggle = () => {
  Offcanvas.getOrCreateInstance(
      document.querySelector("#" + props.id)
  ).toggle();
}

const isShow = () => {
  if (!document.querySelector('#' + props.id)) {
    return false;
  }
  return Offcanvas.getInstance(document.querySelector('#' + props.id))._isShown;
}

const updateContent = (updatedData) => {
  Object.keys(data).forEach(key => {
    data[key] = updatedData[key];
  })
}

const close = () => {
  data?.onClose();
  hide();
}

onMounted(() => {
  bsOffcanvas = new Offcanvas(helperRef.value, {
    backdrop: false,
    scroll: true,
  });
});

onUnmounted(() => {
  bsOffcanvas = null;
});

defineExpose({
  show, hide, toggle, updateContent
});
</script>

<template>
  <div :id="id" class="offcanvas" :class="`offcanvas ${isShow() ? 'show' : ''}`" ref="helperRef">
  <div class="offcanvas-body">
    <div class="d-flex title-setting justify-content-between">
      <div>{{data.title}}</div>
      <div @click="close"><i class="sb-icon sb-icon-close-cross" /></div>
    </div>
    <div class="offcanvas--subtitle">
      <!-- evacuation-site -->
      <div class="d-flex flex-column">
        <div class="horizontal-bar" />
        <div class="d-flex align-items-center list-evacuation text-center justify-content-between">
          <div class="d-flex  text-start align-items-center">{{data.description}}</div>
        </div>
      </div>
    </div>
    <div class="image-helper">
      <i class="sb-image" :class="data.image"/>
    </div>
  </div>
  </div>
</template>
<style lang="scss" scoped>
.offcanvas{
  position: fixed;
  z-index: 2;
}
.offcanvas-body{
  padding-bottom: $BasicRegular;
  border-radius: 8px 8px 0 0;
  background-image: $offcanvas-body-gradient;
}

.title-setting{
  color: $text-color-primary;
  font-size: $h2-font-size;
  font-style: normal;
  font-weight: $font-weight-bold;
  line-height: normal;
}

.offcanvas--footer {
  margin-top: $BasicSmall;
}

.link-check {
  text-align: start;
  background-color: transparent;
  border: none;
  padding: 0 0 0 $BasicXSmall;
  justify-content: start;
  align-items: start;
}

.list-evacuation{
  margin-top: $BasicSmall;
}

.text-evacuation{
  margin: 0 $BasicXSmall 0 $BasicSmall;
  color: $text-color-link;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.check-input{
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
}

.check-input:active{
  color: $text-color-link;
}

.horizontal-bar{
  margin-top: $BasicSmall;
}

.image-helper{
  margin-top: $BasicSmall;
  width: 100%;
  height: 200px;

}

.announcement{
  color: $text-color-secondary;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: $BasicSmall;
  margin-bottom: $BasicSmall;
}
</style>