import {createI18n} from "vue-i18n";

import ENV from "@/config/env";

import en from "./locales/en";
import ja from "./locales/ja";

const i18nData = {
  en, ja
};

const i18n = createI18n({
  locale: ENV.APP_LOCALE,
  fallbackLocale: "ja",
  allowComposition: true,
  messages: i18nData,
});

export default i18n;
