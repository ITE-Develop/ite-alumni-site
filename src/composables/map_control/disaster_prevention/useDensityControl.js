// import { useRef, useDense, useMapConfig } from "@/stores/index";
// import { useMapBoxMarker, useMapBoxLine } from "@/composables/index.js";
// import { ref } from "vue";
// /**
//  * Density Controller
//  */
// export default function useDensityControl() {
//   const { offcanvasRef,mapRef,settingRef } = useRef();
//   const { sortLineLayer, dense_level_marker, dense_level_marker_animation, marker_symbol } = useMapConfig();
//  const { all } = useDense();
//
//   const mapboxDenseMarker = useMapBoxMarker();
//   const mapboxDenseLine = useMapBoxLine();
//
//   const isInit = ref(false);
//   const isActive = ref(false);
//
//   const button = {
//     id: 'density',
//     radiusStyle: 'center',
//     text: "混雑度",
//     iconClass: "sb-icon sb-icon-dense"
//   }
//
//   const setup = async () => {
//     if (isInit.value) {
//       return;
//     }
//
//     mapboxDenseMarker.setup({
//       flyToActive: true,
//       allowMultipleActive: false,
//       markerImage: { ...dense_level_marker, ...dense_level_marker_animation }
//     });
//
//     const dense = await all();
//     dense?.data.forEach((item) => {
//       let icon = marker_symbol.dense_area.vacant;
//       let badge_background = 'background: #2C74E0';
//       let icon_dense = marker_symbol.dense_area.vacant;
//       let image_status = marker_symbol.dense_area.status.vacant;
//       let badge_text = "空いている";
//       let isAnimated = true;
//       let roadColor = "#2C74E0";
//
//       // Switch Congestion Icon and Image
//       switch (item.status) {
//         case "normal":
//           icon = marker_symbol.dense_area.normal;
//           icon_dense = marker_symbol.dense_area.normal;
//           image_status = marker_symbol.dense_area.status.normal;
//           badge_background = 'background: #3C8554';
//           badge_text = '通常通り';
//           roadColor = "#3C8554";
//           break;
//         case "crowded":
//           icon = marker_symbol.dense_area.more_crowded;
//           icon_dense = marker_symbol.dense_area.more_crowded;
//           image_status = marker_symbol.dense_area.status.more_crowded;
//           badge_background = 'background: #D5433D';
//           badge_text = '通常より混雑';
//           roadColor = "#D5433D";
//           break;
//         default:
//       }
//
//       // Add line
//       mapboxDenseLine.addLine({
//         id: item.point_id,
//         coordinates: item?.road?.coordinates,
//       }, roadColor);
//
//       // Add marker
//       mapboxDenseMarker.addMarker({
//         id: item.point_id,
//         coordinate: item.coordinate,
//         icon: icon,
//         iconSize: 0.33,
//         isAnimated,
//         isAnchorCenter: true,
//       }, () => {
//         offcanvasRef.value.show();
//         settingRef.value.hide();
//         offcanvasRef.value.updateContent({
//           icon_dense: icon_dense,
//           badge_background: badge_background,
//           offcanvasKey: 'density',
//           badge: badge_text,
//           title: item.name,
//           time_value: '更新時間：' + item.received_timestamp,
//           image_status: image_status,
//         });
//       });
//     });
//
//     mapboxDenseMarker.animateIcon();
//     isInit.value = true;
//     sortLineLayer(mapRef);
//   }
//
//   const clear = () => {
//     mapboxDenseMarker.setAllMarkersUnactive();
//     mapboxDenseMarker.hideAllMarkers();
//     mapboxDenseLine.setAllLinesDisplay(false);
//   }
//
//   const registerEvent = async () => {
//     clear();
//     setup();
//     isActive.value = !isActive.value;
//     if (!isActive.value) {
//       offcanvasRef.value.hide();
//       return;
//     }
//     mapboxDenseMarker.showAllMarkers();
//     mapboxDenseLine.setAllLinesDisplay(true);
//   }
//
//   return {
//     button,
//
//     registerEvent,
//     clear,
//   };
// }
