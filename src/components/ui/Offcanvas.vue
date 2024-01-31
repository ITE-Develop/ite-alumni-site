<script setup>
import { makeOffcanvasProps } from "@/composables/useProps";
import { Offcanvas } from "bootstrap";
import {onMounted, onUnmounted, ref, reactive} from 'vue';

import RiverOffCanvasComponent from "./OffcanvasComponents/RiverOffCanvasComponent.vue";
import DenseOffCanvasComponent from "./OffcanvasComponents/DenseOffCanvasComponent.vue";
import EvacuationOffCanvasComponent from "./OffcanvasComponents/EvacuationOffCanvasComponent.vue";
import EvacuateSettingBottomsheet from "./OffcanvasComponents/EvacuationBottomsheet/EvacuateSettingBottomsheet.vue";

const offcanvasRef = ref();
let bsOffcanvas = null;

const data = reactive({
  icon_dense: "",
  status: "",
  badge_background: "",
  offcanvasKey: "",
  badge: "",
  title: "",
  water_level: "",
  location: "",
  time_value: "",
  warning_level_title: "",
  warning_level__subtitle: "",
  image_status: "",
  evacuation_target: "",
  description: "",
  status_system: "",
  url: "",
  openHelper: Function,
});

const props = defineProps({
  ...makeOffcanvasProps()
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

const updateContent = (updatedData) => {
  Object.keys(data).forEach(key => {
    data[key] = updatedData[key];
  })
}

const isShow = () => {
  if (!document.querySelector('#' + props.id)) {
    return false;
  }
  return Offcanvas.getInstance(document.querySelector('#' + props.id))._isShown;
}

onMounted(() => {
  bsOffcanvas = new Offcanvas(offcanvasRef.value, {
    backdrop: false,
    scroll: true,
  });
});

onUnmounted(() => {
  bsOffcanvas = null;
});

defineExpose({
  show, hide, toggle, updateContent,
});

</script>

<template>
  <div :id="id" class="offcanvas z-2" :class="`offcanvas ${isShow() ? 'show' : ''}`" ref="offcanvasRef">
    <div v-if="data.offcanvasKey === 'river'">
      <RiverOffCanvasComponent v-bind="data"/>
    </div>
    <div v-else-if="data.offcanvasKey === 'density'">
      <DenseOffCanvasComponent v-bind="data" />
    </div>
    <div v-else-if="data.offcanvasKey === 'evacuation'">
      <EvacuationOffCanvasComponent v-bind="data"/>
    </div>
    <div v-else-if="data.offcanvasKey === 'evacuation_setting'">
      <EvacuateSettingBottomsheet v-bind="data"/>
    </div>
  </div>
</template>
