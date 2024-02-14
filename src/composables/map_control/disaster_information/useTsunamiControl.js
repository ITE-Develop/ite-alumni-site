// import { useRef, useMapConfig } from "@/stores/index";
//
// /**
//  * Tsunami Information Controller
//  */
// export default function useTsunamiControl() {
//   const { legendRef, mapRef } = useRef();
//   const { mapData, renderMapData } = useMapConfig();
//   const button = {
//     id: 'tsunami',
//     text: "津波",
//   }
//
//   const registerEvent = () => {
//     legendRef.value.show();
//     legendRef.value.updateContent({
//       title: "津波浸水想定リスク(竹芝地区)",
//       subtitle: '※浜松町駅以東の竹芝地区のみ表示',
//       water_level: "sb-icon-tsunami-level",
//       water_level_status: "sb-icon-tsunami-level-status",
//       source_text: "「ハザードマップポータルサイト」",
//     });
//
//     renderMapData(mapRef, mapData.tsunami);
//
//   }
//
//   return {
//     button,
//     registerEvent
//   };
// }
