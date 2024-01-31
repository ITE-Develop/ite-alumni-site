<script setup>
import { makeCookieOffcanvasProps } from "@/composables/useProps";
import { Offcanvas } from "bootstrap";
import { onMounted, onUnmounted, ref} from 'vue';

const cookieoffcanvasRef = ref();
let bsOffcanvas = null;

const props = defineProps({
  ...makeCookieOffcanvasProps(),
  acceptCookie: {
    type: Boolean,
    default: false,
  },
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

onMounted(() => {
  bsOffcanvas = new Offcanvas(cookieoffcanvasRef.value, {
    backdrop: "static",
    scroll: true,
  });
});

onUnmounted(() => {
  bsOffcanvas = null;
});

defineExpose({
  show, hide, toggle
});

</script>

<template>
  <div
      tabindex="-1"
      :id="id"
      class="offcanvas"
      :class="`offcanvas ${isShow() ? 'show' : ''}`"
      ref="cookieoffcanvasRef"
      data-keyboard="false">
    <div class="offcanvas-body">
      <div class="title-cookie text-center">
        About the use of cookies
      </div>
      <div class="d-flex mobile-responsive">
        <div class="d-flex flex-column">
          <div class="subtitle-cookie">This website uses cookies</div>
          <div class="offcanvas--content">
            <button class="link-check my-auto" type="button">
              We use cookies to analyze usage status, such as the number of accesses to the app, in order to improve
              this service and consider future disaster prevention services. Usage status is not linked to personal
              information. Detail is,
              <router-link :to="{ name: 'legal.privacy-policy' }" class="body-cookie">
                Application privacy policy
              </router-link>
              Please confirm
            </button>
          </div>
        </div>
        <div class="offcanvas--footer">
        <slot name="cookie-button"></slot>
      </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.offcanvas {
  width: 100%;
}

.offcanvas-body{
  padding: 16px;
}

.title-cookie {
  color: $text-color-primary;
  font-size: $h3-font-size;
  font-style: normal;
  font-weight: $font-weight-bold;
  line-height: normal;
  margin-bottom: $BasicXSmall;
}

.subtitle-cookie{
  color: $text-color-primary;
  font-size: $bold-font-size;
  font-style: normal;
  font-weight: $font-weight-bold;
  line-height: normal;
  margin-bottom: $BasicXSmall;
}
.body-cookie {
  color: $text-color-link;
  text-decoration: none;
}

.offcanvas--footer {
  margin-top: $BasicSmall;
}

.link-check {
  color: $text-color-primary;
  text-align: start;
  background-color: transparent;
  border: none;
  padding: 0 0 0 $BasicXSmall;
  justify-content: start;
  align-items: start;
  font-size: $normal-font-size;
  font-style: normal;
  font-weight: $font-weight-normal;
  line-height: normal;
}
//responsive for mobile .mobile-responsive add flex-direction: column
@media (max-width: 767px) {
  .mobile-responsive {
    flex-direction: column;
  }
}
</style>