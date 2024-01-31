import GroupBtnControl from "@/components/js/GroupBtnControl";
import useDensityControl from "./disaster_prevention/useDensityControl";
import useEvacuationControl from "./disaster_prevention/useEvacuationControl";
import useRiverControl from "./disaster_prevention/useRiverControl";

import { useMapConfig, useRef } from "@/stores/index";

export default function useDisasterPrevectionControl() {
  const evacuationControl = useEvacuationControl();
  const densityControl = useDensityControl();
  const riverControl = useRiverControl();

  const { mapRef } = useRef();
  const { clearDisasterMapData } = useMapConfig();

  const buttons = [
    evacuationControl.button,
    densityControl.button,
    riverControl.button
  ];

  const instance = new GroupBtnControl({
    buttons,
    canActive: true
  });

  const registerEvent = (buttonId) => {
    switch (buttonId) {
      case evacuationControl.button.id:
        evacuationControl.registerEvent();
        break;
      case densityControl.button.id:
        densityControl.registerEvent();
        break;
      case riverControl.button.id:
        riverControl.registerEvent();
        break;
    }
  }

  const clearControlData = () => {
    clearDisasterMapData(mapRef);
    riverControl.clear();
    densityControl.clear();
  }

  return {
    instance,
    buttons,

    registerEvent,
    clearControlData
  };
}
