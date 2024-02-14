// import { useMapConfig, useRef } from "@/stores/index";
//
// /**
//  * Liquefaction Information Controller
//  */
// export default function useLiquefactionControl() {
//   const { legendRef, mapRef } = useRef()
//   const { mapData, renderMapData  } = useMapConfig();
//
//   const button = {
//     id: 'liquefaction',
//     text: "液状化",
//   };
//
//   const registerEvent = () => {
//     legendRef.value.show();
//     legendRef.value.updateContent({
//       title: "液状化リスク(竹芝地区)",
//       subtitle: '※浜松町駅以東の竹芝地区のみ表示',
//       water_level: "sb-icon-liquefaction-level",
//       water_level_status: "sb-icon-liquefaction-level-status",
//       source_text: "「港区液状化マップ」",
//     });
//
//     renderMapData(mapRef, mapData.liquefaction)
//   }
//
//   return {
//     button,
//     registerEvent
//   };
// }
