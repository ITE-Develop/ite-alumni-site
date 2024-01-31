<script setup>

import {useI18n} from "vue-i18n";
import {SbCookieOffcanvas, SbModal} from "@/components/ui/index.js";
import {onMounted, ref} from "vue";
import {useInitialAccess} from "@/composables/index.js";

const initialAccess = useInitialAccess();

const { t } = useI18n();
const clickCheckbox = ref(false);
const {
  agreeTermofUse,
  modalRef,
  agreeCookie,
  disagreeCookie,
  getTermofUse,
  isInitialTerm
} = useInitialAccess();
const isChecked = ref(false);
const cookieoffcanvasRef = ref();
const onclickCheckbox = () => {
  clickCheckbox.value = true;
  cookieoffcanvasRef.value.show();
  agreeTermofUse();
}
const acceptCookieOffcanvas = () => {
  agreeCookie();
  clickCheckbox.value = false;
}
const rejectCookieOffcanvas = () => {
  disagreeCookie();
  clickCheckbox.value = false;
}

if (getTermofUse()) {
  clickCheckbox.value = true;
}

onMounted(() => {
  // Inject Google Analytic
  initialAccess.init();
  if (getTermofUse() && isInitialTerm()) {
    cookieoffcanvasRef.value.show();
  }
});
</script>

<template>

  <SbModal ref="modalRef" v-if="!clickCheckbox">
    <template #header>
      <div class="w-100 text-center term-title">
        Terms of Use
      </div>
    </template>
    <template #body>
      <div class="w-100 text-center">
        <p class="text-center body-text-term">To visit the website, you must agree to the terms of service.</p>
      </div>
    </template>
    <template #checkbox>
      <div class="form-check mx-auto d-flex">
        <input class="form-check-input check-input my-auto" type="checkbox" value="" id="checkbox"
               v-model="isChecked">
        <label class="form-check-label my-auto body-text-term ms-1" for="flexCheckDefault">
          Agree with
        </label>
        <button type="button" class="link-check my-auto" data-bs-dismiss="modal">
          <router-link :to="{ name: 'legal.term-of-use' }">
            <label class="form-check-label body-text-term-link" for="flexCheckDefault">
              Terms of Use
            </label>
          </router-link>
        </button>

      </div>
    </template>
    <template #footer>
      <div v-if="isChecked" class="d-flex flex-column w-100" style="padding: 16px">
        <button type="button" class="btn btn-accept text-white" @click="onclickCheckbox"
                data-bs-dismiss="modal">Accept</button>
      </div>
      <div v-else class="d-flex flex-column w-100" style="padding: 16px">
        <button type="button" class="btn btn-disable text-white">Accept</button>
      </div>
    </template>
  </SbModal>
  <SbCookieOffcanvas ref="cookieoffcanvasRef" v-show="clickCheckbox">
    <template #cookie-button>
      <div class="d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-primary text-white reject" data-bs-dismiss="offcanvas" @click="rejectCookieOffcanvas">
          <div class="reject-text">Reject cookies</div>
        </button>
        <button type="button" class="btn btn-primary text-white accept" data-bs-dismiss="offcanvas"  @click="acceptCookieOffcanvas">
          <div class="accept-text">Allow cookies</div>
        </button>
      </div>
    </template>
  </SbCookieOffcanvas>
</template>
