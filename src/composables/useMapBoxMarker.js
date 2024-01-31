import { ref } from "vue";
import { useRef } from "@/stores";

export default function useMapBoxMarker() {
  const { mapRef } = useRef();

  let markers = ref([]);
  let isClickAble = ref(true);
  let allowMultiActive = ref(true);
  let isFlyToActive = ref(false);

  const clickingMarker = ref([]);
  const clickingTimer = ref(false);
  const customImage = ref({});

  // Add Marker to Map
  const addMarker = (marker, clickEvent = () => {
  }) => {
    const {
      id,
      coordinate,
      icon,
      iconSize,
      isAnimated,
      isAnchorCenter ,
    } = marker;

    markers.value[id] = {
      markerID: 'marker-' + id,
      icon,
      iconSize,
      coordinate,
      isAnimated,
      isAnchorCenter,
      frameIndex: 0,
      animationFrames: [
        { icon: `${icon}`, delay: 200 },
        { icon: `${icon}-2`, delay: 100 },
        { icon: `${icon}-3`, delay: 100 },
        { icon: `${icon}-4`, delay: 50 }
      ],
      clickEvent,
    }

    if (mapRef.value.getSource(markers.value[id].markerID)) {
      return;
    }

    // Add an image to use as a custom marker
    mapRef.value.addSource(markers.value[id].markerID, {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [
          {
            // feature for Mapbox DC
            'type': 'Feature',
            'geometry': coordinate
          }
        ]
      }
    });

    // Add a symbol layer
    mapRef.value.addLayer({
      'id': markers.value[id].markerID,
      'type': 'symbol',
      'source': markers.value[id].markerID,
      'layout': {
        'icon-image': markers.value[id].icon,
        'icon-allow-overlap': true,
        'icon-size': markers.value[id].iconSize || 1,
        'icon-anchor': isAnchorCenter? 'center' :  'bottom',
      },
    });

    // click event on marker
    mapRef.value.on('click', markers.value[id].markerID, (e) => {
      if (!isClickAble.value || !id) {
        return;
      }

      clickingMarker.value.push(markers.value[id].markerID);
      clearTimeout(clickingTimer.value);
      clickingTimer.value = setTimeout(() => {
        if (clickingMarker.value.length > 1) {
          clickToZoom(id);
          clickingMarker.value = [];
          return;
        }

        // Call Click Event
        clickEvent();
        // Set Marker Focus
        toggleMarkerActive(id);
        // Fly to marker
        flyTo(id);

        clickingMarker.value = [];
      }, 30);
    })
    mapRef.value.on('mouseover', markers.value[id].markerID, (e) => {
      mapRef.value.getCanvas().style.cursor = 'pointer'
    })

    mapRef.value.on('mouseleave', markers.value[id].markerID, (e) => {
      mapRef.value.getCanvas().style.cursor = ''
    })
  }

  const animateIcon = () => {
    Object.entries(markers.value).forEach(([key, marker]) => {
      if (!marker || !marker.isAnimated) {
        return;
      }

      const updateFrame = () => {
        if (!mapRef?.value.getStyle()) {
          return;
        }
        const layer = mapRef.value.getLayer(marker.markerID);
        if (!layer) {
          return;
        }
        mapRef.value.setLayoutProperty(layer.id, 'icon-image', marker.animationFrames[marker.frameIndex].icon);
        marker.frameIndex = (marker.frameIndex + 1) % marker.animationFrames.length;

        if (marker.frameIndex === marker.animationFrames[marker.frameIndex].length) {
          clearInterval(interval);
        }
      }

      // Start the animation with the specified delays
      let interval = setInterval(updateFrame, marker.animationFrames[marker.frameIndex].delay);
      marker.animationFrames.forEach((item) => {
        setTimeout(() => {
          updateFrame();
          clearInterval(interval);
          interval = setInterval(updateFrame, item.delay);
        }, item.delay);
      });
    });
  }

  // Start the animation

  // Animate the marker by updating its position every frame

  const reMappingMarker = () => {
    if (mapRef.value.getZoom() < 15) {
      return;
    }

    clickingMarker.value.forEach((markerID) => {
      const marker = mapRef.value.getSource(markerID);
      if (!marker) {
        return;
      }

      const id = markerID.split('marker-')[1];
      const markerData = marker._options.data;
      const randLngLat = mapRef.value.getZoom() > 17 ? markers.value[id].coordinate?.coordinates : randomLngLat(markers.value[id].coordinate?.coordinates)

      // update marker position
      markers.value[id].coordinate.coordinates = randLngLat;
      marker.setData({
        ...markerData,
        ...{
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': markers.value[id].coordinate
            }
          ]
        }
      });
    });
  }

  const randomLngLat = (lngLat) => {
    const max = clickingMarker.value.length;
    const min = 1;
    const decimal = 5

    const lng = lngLat[0] + (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * (max - min + 1) + min) / Math.pow(10, decimal)).toFixed(decimal);
    const lat = lngLat[1] + (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * (max - min + 1) + min) / Math.pow(10, decimal)).toFixed(decimal);

    return [lng, lat];
  }

  const clickToZoom = (id) => {
    const zoom = mapRef.value.getZoom() < 13 ? 16 : mapRef.value.getZoom() + 2;
    mapRef.value.easeTo({
      center: markers.value[id].coordinate?.coordinates,
      zoom
    })

    reMappingMarker();
  }

  const flyTo = (id) => {
    if (!isFlyToActive.value || !markers.value[id]) {
      return;
    }

    mapRef.value.flyTo({
      center: markers.value[id].coordinate?.coordinates,
    })
  }

  const setAllMarkersUnactive = () => {
    Object.entries(markers.value).forEach(([id, marker]) => {
      const isActive = mapRef.value.getLayoutProperty(marker.markerID, 'icon-image');
      if (isActive !== marker.icon) {
        mapRef.value.setLayoutProperty(marker.markerID, 'icon-image', marker.icon);
        // closeMarker(id);
      }
    })
  }

  const hideAllMarkers = () => {
    Object.entries(markers.value).forEach(([id, marker]) => {
      hideMarker(marker.markerID)
    });
  }

  const hideMarker = (id) => {
    if (!mapRef.value.getLayer(id)) return;
    mapRef.value.setLayoutProperty(id, 'visibility', 'none');
  }

  const showMarker = (id) => {
    if (!mapRef.value.getLayer(id)) return;
    mapRef.value.setLayoutProperty(id, 'visibility', 'visible');
  }

  const toggleMarker = (id, toggle) => {
    if (!markers.value[id]) {
      return;
    }

    if (!toggle) {
      hideMarker(markers.value[id].markerID);
      return
    }
    showMarker(markers.value[id].markerID)
  }

  const showAllMarkers = () => {
    Object.entries(markers.value).forEach(([id, marker]) => {
      showMarker(marker.markerID)
    });
  }

  const toggleMarkerActive = (id, toggle = true) => {
    if (!allowMultiActive.value) {
      setAllMarkersUnactive();
    }

    const marker = markers.value[id];
    if (marker.isAnimated) {
      return;
    }
    if (toggle) {
      sortFocusMarker(marker.markerID)
    }
    mapRef.value.setLayoutProperty(marker.markerID, 'icon-image', !toggle ? marker.icon : marker.icon + '-focus');
  }

  const sortFocusMarker = (markerID) => {
    const style = mapRef.value.getStyle();
    const markerLayers = style.layers.filter(layer => layer.id.startsWith("marker-"));

    if (!markerLayers.length) {
      return;
    }
    markerLayers.forEach((marker) => {
      if (!marker) {
        return;
      }
      mapRef.value.moveLayer(marker.id, markerID);
    });
  }

  const initCustomImage = (imageObjects = {}) => {
    customImage.value = imageObjects;
  }

  const triggerMarkerClick = (id) => {
    if (!isClickAble.value || checkMarkerNotExisted(id)) {
      return;
    }
    toggleMarkerActive(id); // Set Marker Focus
    flyTo(id); // Fly to marker
    initPopup(id); // Initialize Popup
  }

  const checkMarkerNotExisted = (id) => {
    return (!mapRef.value.getStyle() || !id || !markers.value[id]);
  }

  const setup = ({ clickOnMarker = true, flyToActive = false, allowMultipleActive = true, markerImage = {} } = option) => {
    isClickAble.value = clickOnMarker;
    isFlyToActive.value = flyToActive;
    allowMultiActive.value = allowMultipleActive;

    initCustomImage(markerImage);

    const customImageArr = Object.entries(customImage.value);
    customImageArr.forEach(([key, value]) => {
      mapRef.value.loadImage(
        value,
        (error, value) => {
          if (!mapRef.value.getStyle() || mapRef.value.hasImage(key)) {
            return;
          }
          mapRef.value.addImage(key, value);
        }
      );
    });
  }

  return {
    markers,
    addMarker,
    toggleMarker,
    triggerMarkerClick,
    toggleMarkerActive,
    setAllMarkersUnactive,
    hideAllMarkers,
    showAllMarkers,
    setup,
    initCustomImage,
    animateIcon
  };
}
