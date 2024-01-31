<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { Offcanvas } from "bootstrap";
import { makeOffcanvasProps } from "@/composables/useProps.js";


const props = defineProps({
  ...makeOffcanvasProps(),
});

const data = reactive({
  items: [],
});

const settingRef = ref();

let bsOffcanvas = null;

const show = () => {
  Offcanvas.getOrCreateInstance(
    document.querySelector("#" + props.id)
  ).show();
}

const hide = () => {
  Offcanvas.getOrCreateInstance(
    document.querySelector("#" + props.id)
  ).hide();
  data.items.forEach((item) => {
    document.getElementById("checkbox-" + item.id).checked = true;
    item.checked = true;
  });
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

onMounted(() => {
  bsOffcanvas = new Offcanvas(settingRef.value, {
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
  <div :id="id" class="offcanvas z-0" :class="`offcanvas ${isShow() ? 'show' : ''}`" ref="settingRef">
    <div class="offcanvas-body">
      <div class="d-flex title-setting justify-content-between">
        <div>避難先</div>
        <div @click="hide"><i class="sb-icon sb-icon-close-cross" /></div>
      </div>
      <div class="offcanvas--subtitle" v-if="data?.items.length > 0">
        <div class="font-sm text-secondary mt-2">
          ※区外にお住まいの方は一時滞在施設を優先的に利用ください
        </div>
        <div class="d-flex flex-column" v-for="(item) in data.items" :key="item.id">
          <div class="horizontal-bar" />
          <div class="d-flex align-items-center list-evacuation text-center justify-content-between">
            <div class="d-flex  text-center align-items-center">
              <i class="sb-icon" :class="item.icon" />
              <pre class="text-evacuation">{{ item.name }}</pre>
              <i @click="item.onHelpClick" class="sb-icon sb-icon-evacuation--more-info" />
            </div>
            <input class="form-check-input check-input" type="checkbox"
                   :id="`checkbox-${item.id}`" :checked="item.checked" @change="item.onChecked" v-model="item.checked">
          </div>
        </div>
        <div class="horizontal-bar" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.offcanvas {
  position: fixed;
  z-index: 1;
}

.offcanvas-body {
  position: relative;
  z-index: 1;
  padding-bottom: $BasicRegular;
  border-radius: 8px 8px 0 0;
  background-image: $offcanvas-body-gradient;

  /* shadow-primary */
  box-shadow: 0px 1px 2px 0px rgba(0, 98, 128, 0.32);
}

.title-setting {
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

.list-evacuation {
  margin-top: $BasicSmall;
}

.text-evacuation {
  margin: 0 $BasicXSmall 0 $BasicSmall;
  color: $text-color-link;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: start;
  max-width: 182px;
}

.text-evacuation {
  font-family:  "Hiragino Kaku Gothic Pro";
}

.check-input {
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
}

input:checked {
  background-color: $icon-color-primary;
}

.horizontal-bar {
  margin-top: $BasicSmall;
}

</style>