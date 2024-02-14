// import { ref } from "vue";
// import { useRef } from "@/stores";
//
// export default function useMapBoxLine() {
//   const { mapRef } = useRef();
//
//   let lines = ref([]);
//   let showLines = ref(false);
//
//   const addLine = (line, color = "#2C74E0", size = 8) => {
//     if (mapRef.value.getSource('route-' + line.id)) {
//       return;
//     }
//
//     mapRef.value.addSource('route-' + line.id, {
//       'type': 'geojson',
//       'data': {
//         'type': 'Feature',
//         'properties': {},
//         'geometry': {
//           'type': 'LineString',
//           'coordinates': line.coordinates
//         }
//       }
//     });
//
//     // outer line
//     mapRef.value.addLayer({
//       'id': 'route-outline-' + line.id,
//       'type': 'line',
//       'source': 'route-' + line.id,
//       'layout': {
//         'line-join': 'round',
//         'line-cap': 'round'
//       },
//       'paint': {
//         'line-color': color,
//         'line-width': size,
//         'line-opacity': 0
//       }
//     });
//
//     // inner line
//     mapRef.value.addLayer({
//       'id': 'route-' + line.id,
//       'type': 'line',
//       'source': 'route-' + line.id,
//       'layout': {
//         'line-join': 'round',
//         'line-cap': 'round'
//       },
//       'paint': {
//         'line-color': color,
//         'line-width': size,
//         'line-opacity': 0.5
//       }
//     });
//
//     lines.value[line.id] = {
//       lineID: line.id,
//     }
//
//     // setLineDisplay(line.id);
//   }
//
//   const isShowLines = () => {
//     return showLines.value;
//   }
//
//   const setAllLinesDisplay = (displayStatus = true) => {
//     Object.keys(lines.value).forEach((key) => {
//       const line = lines.value[key];
//       setLineDisplay(line.lineID, displayStatus)
//     })
//   };
//
//   const setLineDisplay = (id, toggle = false) => {
//     const line = lines.value[id];
//     if (!line) {
//       return;
//     }
//
//     toggleLayer('route-' + line.lineID, toggle);
//     toggleLayer('route-outline-' + line.lineID, toggle);
//   }
//
//   const toggleLayer = (id, toggle) => {
//     if (!mapRef.value.getLayer(id)) {
//       return;
//     }
//     if (!toggle) {
//       return mapRef.value.setLayoutProperty(id, 'visibility', 'none');
//     }
//     mapRef.value.setLayoutProperty(id, 'visibility', 'visible');
//   }
//
//   return {
//     addLine,
//     isShowLines,
//     setLineDisplay,
//     setAllLinesDisplay
//   };
// }