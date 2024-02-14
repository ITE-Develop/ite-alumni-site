// import {useMapConfig, useRef} from "@/stores/index";
//
// /**
//  * Storm Information Controller
//  */
// export default function useStormControl() {
//   const { legendRef, mapRef } = useRef();
//   const { mapData, renderMapData } = useMapConfig();
//   const button = {
//     id: 'storm',
//     text: "高潮",
//   }
//
//   const registerEvent = () => {
//     legendRef.value.show();
//     legendRef.value.updateContent({
//       title: mapData.storm.title,
//       water_level: mapData.storm.water_level,
//       water_level_status: mapData.storm.water_level_status,
//       source_text: mapData.storm.source_text,
//     });
//
//     renderMapData(mapRef, mapData.storm);
//   }
//
//   return {
//     button,
//     registerEvent
//   };
// }
