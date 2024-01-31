import { useQuery } from "@/composables";
import { useRef } from "@/stores/index";

import useDisasterControl from "./useDisasterControl";
import useDisasterPrevectionControl from "./useDisasterPrevectionControl";

export default function useGroupControl() {
  const { replaceQueryIfNotExist, getQuery } = useQuery();

  const disaster_information = useDisasterControl();
  const disaster_prevention = useDisasterPrevectionControl();

  const groupBtn = [
    disaster_information.instance,
    disaster_prevention.instance
  ];

  const registerEvent = () => {
    // Disaster Information Button Event
    disaster_information.buttons.forEach((item) => {
      disaster_information.instance.registerButtonOnClick(item.id, () => {
        replaceQueryIfNotExist("display", item.id);
        disaster_information.registerEvent(item.id)
      })

      if (getQuery('display') === item.id) {
        disaster_information.instance.triggerButton(item.id);
      }
    });

    // Disaster Prevention Button Event
    disaster_prevention.buttons.forEach((item) => {
      disaster_prevention.instance.registerButtonOnClick(item.id, () => {
        replaceQueryIfNotExist("display", item.id);
        disaster_prevention.registerEvent(item.id)
      });

      if (getQuery('display') === item.id) {
        disaster_prevention.instance.triggerButton(item.id);
      }
    })
  }

  return {
    groupBtn,
    registerEvent
  };
}
