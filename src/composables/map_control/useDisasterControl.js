// import { reactive } from "vue";
//
// import GroupBtnControl from "@/components/js/GroupBtnControl";
// import useFloodControl from "./disaster_information/useFloodControl";
// import useLiquefactionControl from "./disaster_information/useLiquefactionControl";
// import useStormControl from "./disaster_information/useStormControl.js";
// import useTsunamiControl from "./disaster_information/useTsunamiControl";
//
// import { useMapConfig, useRef } from "@/stores/index";
//
// export default function useDisasterControl() {
//   const floodControl = useFloodControl();
//   const stormControl = useStormControl();
//   const liquefactionControl = useLiquefactionControl();
//   const tsunamiControl = useTsunamiControl();
//
//   const { mapRef, legendRef } = useRef();
//   const { clearDisasterMapData } = useMapConfig();
//
//   const buttons = [
//     floodControl.button,
//     stormControl.button,
//     liquefactionControl.button,
//     tsunamiControl.button
//   ];
//
//   const isActive = reactive({
//     flood: false,
//     storm: false,
//     liquefaction: false,
//     tsunami: false
//   });
//
//   const instance = new GroupBtnControl({
//     version: "2",
//     icon: "sb-icon sb-icon-layer",
//     canActive: true,
//     buttons
//   });
//
//   const registerEvent = (buttonId) => {
//     legendRef.value.hide();
//     clearDisasterMapData(mapRef);
//
//     toggleActive(buttonId);
//     if (!isActive[buttonId]) {
//       return
//     }
//     // clear active control
//     instance.clearAllActive();
//
//     switch (buttonId) {
//       case floodControl.button.id:
//         floodControl.registerEvent();
//         break;
//       case stormControl.button.id:
//         stormControl.registerEvent();
//         break;
//       case liquefactionControl.button.id:
//         liquefactionControl.registerEvent();
//         break;
//       case tsunamiControl.button.id:
//         tsunamiControl.registerEvent();
//         break;
//     }
//   }
//
//   const toggleActive = (buttonId) => {
//     Object.entries(isActive).forEach(([key, value]) => {
//       if (key !== buttonId) {
//         isActive[key] = false;
//         return;
//       }
//       isActive[key] = !value;
//     });
//   }
//
//   return {
//     instance,
//     buttons,
//     registerEvent
//   };
// }
