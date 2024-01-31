import ENV from "@/config/env";
import { onMounted, ref } from "vue";
import { useCookies } from "vue3-cookies";
import {useGoogleAnalytic} from "@/composables/index.js";
export default function useInitialAccess() {
  const modalRef = ref();
  const offcanvasRef = ref();
  const { cookies } = useCookies();
  const googleAnalytic = useGoogleAnalytic();

  const agreeCookie = () => {
    cookies.set(`${ENV.APP_PREFIX}-access`, "1", "400d");
    googleAnalytic.init();
  }

  const disagreeCookie  = () => {
    cookies.set(`${ENV.APP_PREFIX}-access`, "0", "400d");
  }

  const init = () => {
    if (!(cookies.get(`${ENV.APP_PREFIX}-access`) === "1")) {
      return;
    }
    googleAnalytic.init();
  }

  const isInitial = () => {
    return !cookies.get(`${ENV.APP_PREFIX}-access`)
  }

  const isInitialTerm = () => {
    return !cookies.get(`${ENV.APP_PREFIX}-access`)
  }

  const agreeTermofUse = () => {
    cookies.set(`${ENV.APP_PREFIX}-term-of-use`, "1", "400d");
  }

  const getTermofUse = () => {
    if (cookies.get(`${ENV.APP_PREFIX}-term-of-use`) === "1"){
      return true;
    }
  }

  onMounted(() => {
    if (isInitialTerm()) {
      modalRef.value?.show();
    }
    if (isInitial()) {
      offcanvasRef.value?.show();
    }
  })

  return {
    modalRef,
    offcanvasRef,
    agreeCookie,
    disagreeCookie,
    init,
    agreeTermofUse,
    getTermofUse,
    isInitialTerm
  };
}
