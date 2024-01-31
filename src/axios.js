import axios from "axios";

import { mapResponse } from "@/composables/useMixin";

import ENV from "./config/env";

const http = axios.create({
  baseURL: ENV.APP_API_URL,
  headers: {
    'Accept': 'application/json',
    'X-Access-Key': ENV.APP_API_ACESS_KEY,
  }
});

// response interceptor
http.interceptors.response.use(
  ({data, headers}) => {
    if (headers['content-type'] !== "application/json" && headers['content-type'] !== "application/json; charset=UTF-8") {
      return Promise.resolve({data});
    }
    return Promise.resolve(mapResponse(data));
  },
  (e) => {
    return console.error(e?.config.method.toUpperCase() + "  " + e?.config.baseURL, "net::" + e?.code);
  }
);

export default http;
