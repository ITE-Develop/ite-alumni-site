<script setup>
import { SbMap } from "@/components/ui";

import { useTokyuMap, useMetaTag } from "@/composables";
import { SbLegend, SbModal, SbOffcanvas, SbEvacuateHelpBottomsheet, SbEvacuateSettingBottomsheet } from "@/components/ui";
import { useRef } from "@/stores";
import ENV from "@/config/env";

const prefix = ENV.APP_PREFIX;
const tokyuMap = useTokyuMap();
const { mapRef, legendRef, modalRef, offcanvasRef, helperRef, settingRef } = useRef();
const { setTitle } = useMetaTag();

setTitle("防災マップ");
const onConfirmClick = () => {
  modalRef.value.hide();
}
const onMapReady = (map) => {
  mapRef.value = map;
  tokyuMap.init(map);
}

</script>

<template>
  <main class="sb-main">
    <div class="below">
      <sb-map name="harzard-map" v-bind="tokyuMap.mapProperty" @on-ready="onMapReady"
        :ref="(el) => { tokyuMap.setMapRef(el) }">
      </sb-map>
    </div>

    <SbOffcanvas ref="offcanvasRef" />
    <SbEvacuateHelpBottomsheet ref="helperRef" id="helper"/>
    <SbEvacuateSettingBottomsheet ref="settingRef" id="setting"/>
    <SbLegend ref="legendRef" />

    <SbModal id="sb-permission" ref="modalRef" :has-header="false" :has-footer="true">
      <template #body>
        現在地表示ボタンを利用するには、位置情報の許可が必要です。
      </template>
      <template #footer>
        <button type="button" class="btn btn-location-alert mx-auto mt-2" @click="onConfirmClick" data-dismiss="modal">OK</button>
      </template>
    </SbModal>
  </main>
</template>
<style lang="scss" scoped>
@import url("@/assets/scss/theme/default/_legend.scss");
.btn-location-alert{
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  color:#1b6ef3;
  margin-bottom: $BasicRegular;
}
</style>