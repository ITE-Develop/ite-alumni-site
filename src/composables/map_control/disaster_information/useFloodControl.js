// import { useMapConfig, useRef } from "@/stores";
//
// /**
//  * Flood Information Controller
//  */
// export default function useFloodControl() {
//   const { legendRef, mapRef } = useRef();
//   const { mapData, renderMapData } = useMapConfig();
//   const button = {
//     id: 'flood',
//     text: "洪水",
//   }
//
//   const registerEvent = () => {
//     legendRef.value.show();
//     legendRef.value.updateContent({
//       title: mapData.flood.title,
//       water_level: mapData.flood.water_level,
//       water_level_status: mapData.flood.water_level_status,
//       source_text: mapData.flood.source_text,
//     });
//
//     renderMapData(mapRef, mapData.flood);
//   }
//
//   return {
//     button,
//     registerEvent
//   };
// }
