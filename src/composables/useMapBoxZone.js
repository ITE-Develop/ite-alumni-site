

import { useRef } from "@/stores/index";
import { ref } from "vue";

export default function useMapBoxZone() {
  const { mapRef } = useRef();

  let zones = ref([]);
  let showZones = ref(false);

  const addZone = (id, lngLatLists, color = "#0000ff", opacity = 0.5, geometryType = "Polygon") => {
    const existedSource = mapRef.value.getSource('zone-' + id);
    if (existedSource) {
      mapRef.value.style._sourceCaches['other:zone-' + id].update(mapRef.value.transform)
      mapRef.value.triggerRepaint()
      return;
    }

    mapRef.value.addSource('zone-' + id, {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: geometryType,
          coordinates: [lngLatLists],
        },
      },
    });
    mapRef.value.addLayer({
      id: 'zone-' + id,
      type: "fill",
      source: 'zone-' + id,
      layout: {},
      paint: {
        "fill-color": color,
        "fill-opacity": opacity,
      },
    });

    zones.value.push({
      layerID: 'zone-' + id,
    })

    toggleLayer('zone-' + id, false);
  };

  const setZonesDisplay = (displayStatus = true) => {
    for (const zone of zones.value) {
      toggleLayer(zone.layerID, displayStatus);
    }
    showZones.value = displayStatus;
  };

  const toggleLayer = (layer, toggle) => {
    if (!mapRef.value.getLayer(layer)) return;
    if (toggle) {
      mapRef.value.setLayoutProperty(layer, 'visibility', 'visible');
    } else {
      mapRef.value.setLayoutProperty(layer, 'visibility', 'none');
    }
  }

  const clearZones = () => {
    for (const zone of zones.value) {
      if (!mapRef.value.getLayer(zone.layerID)) {
        continue;
      };
      mapRef.value.removeLayer(zone.layerID);
      mapRef.value.removeSource(zone.layerID);
    }
    zones.value = [];
  }

  return {
    clearZones,
    addZone,
    toggleLayer,
    setZonesDisplay
  };
}
