<script setup>
import { onMounted, onUnmounted, ref, reactive } from "vue";
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import ENV from "@/config/env";
import { makeMapboxProps } from "@/composables/useProps";

const prefix = ENV.APP_PREFIX;
const emit = defineEmits(['on-ready', 'on-pin']);
const props = defineProps({
  ...makeMapboxProps()
});

const container = `${prefix}-map`
const mainClassObject = reactive({
  [container]: true,
});

const map = ref(null);
const pinMarker = ref(null);
const initMap = () => {
  mapboxgl.accessToken = ENV.MAPBOX_ACCESS_TOKEN;

  map.value = new mapboxgl.Map({
    container: props.name,
    style: !props.isDark ? props.mapStyle : 'mapbox://styles/mapbox/dark-v10',
    zoom: props.zoom,
    center: props.center,
    attributionControl: false,
    preserveDrawingBuffer: true
  });

  // resize when everything in map is rendered
  map.value.on("idle", () => {
    map.value.resize();
  });

  map.value.on("click", (e) => {
  });


  map.value.once("style.load", () => {
    emit('on-ready', map.value);
    map.value.resize();
  });
};

const setPin = (position) => {
  if (!pinMarker.value) {
    pinMarker.value = new mapboxgl.Marker({ "color": "#FF2800" });
  }

  if (!position) {
    pinMarker.value.remove();
    pinMarker.value = null;
    return;
  }

  pinMarker.value.setLngLat(position).addTo(map.value);

  flyTo(position);
  emit('on-pin', map.value)
};

const flyTo = (position) => {
  map.value.flyTo({
    center: position,
  });
};

const initMapLanguage = () => {
  map.value.once('style.load', () => {
    let labels = ['country-label', 'state-label',
      'settlement-label', 'settlement-subdivision-label',
      'airport-label', 'poi-label', 'water-point-label',
      'water-line-label', 'natural-point-label',
      'natural-line-label', 'waterway-label', 'road-label'];

    labels.forEach(label => {
      if (!map.value.getLayer(label)) {
        return;
      }
      map.value.setLayoutProperty(label, 'text-field', ['get', 'name_ja']);
    });
  });
}

const initMapEvent = () => {
  map.value.on("click", (event) => {
    if (!props.canPin) {
      return;
    }

    if (!pinMarker.value) {
      pinMarker.value = new mapboxgl.Marker({ "color": "#FF2800" });
    }

    pinMarker.value.setLngLat(event.lngLat).addTo(map.value);

    emit('on-pin', map.value)
  })
}

onMounted(() => {
  initMap();
  initMapLanguage();
  initMapEvent();
});

onUnmounted(() => {
  map.value.remove();
})

defineExpose({
  resize: () => map?.value?.resize(),
  setPin,
  map,
});

</script>

<template>
  <div :id="name" :class="mainClassObject"></div>
</template>

<style lang="scss" scoped>
.#{$prefix}map {
  height: 100svh; /* Use vh as a fallback for browsers that do not support Custom Properties */
  width: 100vw;
}
</style>
