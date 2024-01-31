import { reactive, ref } from "vue";

import useHarzardMap from "./useHarzardMap";
import ENV from "@/config/env";

export default function useTokyuMap() {
  const mapRef = useHarzardMap();

  const mapInstance = ref(null);
  const mapProperty = reactive({
    zoom: 14.7,
    key: 0,
    mapStyle: ENV.MAPBOX_STYLE_TAKESHIBA
  })

  const resize = () => {
    mapInstance.value?.resize();
  }

  const setMapRef = (elRef) => {
    mapInstance.value = elRef;
  }

  const getMapRefInstance = () => {
    return mapInstance.value;
  }

  const init = (map, option) => {
    mapRef.init(map, option);
  }

  return {
    mapProperty,
    init,
    resize,
    setMapRef,
    getMapRefInstance,
  };
}
