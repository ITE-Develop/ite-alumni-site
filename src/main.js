import { createApp } from "vue";
import { createPinia } from "pinia";

import VueCookies from "vue3-cookies";
import router from "@/router";
import i18n from "@/i18n";
import App from "@/App.vue";
import "@/assets/scss/app.scss";

const pinia = createPinia();

const app = createApp(App)
  .use(pinia)
  .use(i18n)
  .use(router)
  .use(VueCookies);

export default app.mount("body");