import { ref } from "vue";
import { useRef, useMapConfig } from "@/stores/index";
import { useMapBoxMarker } from "@/composables/index";

import { useRiver } from "@/stores/index";
/**
 * River Level Controller
 */
export default function useRiverControl() {
  const { offcanvasRef, settingRef, mapRef } = useRef();
  const { water_level_marker, marker_symbol } = useMapConfig();
  const { all } = useRiver();

  const mapboxMarker = useMapBoxMarker();

  const isInit = ref(false);
  const isActive = ref(false);

  const button = {
    id: 'river',
    radiusStyle: 'bottom',
    text: "河川水位",
    iconClass: "sb-icon sb-icon-river"
  }

  const setup = async () => {
    if (isInit.value) {
      return;
    }

    mapboxMarker.setup({
      flyToActive: true,
      allowMultipleActive: false,
      markerImage: water_level_marker
    });

    // unfocus marker during map click
    mapRef.value.on('click', (e) => {
      if (!isActive.value || !isInit.value) {
        return;
      }

      mapboxMarker.setAllMarkersUnactive();
    });

    const river = await all();
    river?.data.forEach((item) => {
      const isDangerValid = parseFloat(item.danger_stage) > 0;
      const isDangerStage = isDangerValid && item.water_level > item.danger_stage;

      let icon = isDangerStage ? marker_symbol.water_level.danger : marker_symbol.water_level.none;

      mapboxMarker.addMarker({
        id: item.frics_river_water_level_status_id,
        coordinate: item.coordinate,
        icon: icon,
        iconSize: 0.33,
      }, () => {
        offcanvasRef.value.show();
        settingRef.value.hide();
        offcanvasRef.value.updateContent({
          offcanvasKey: 'river',
          badge: isDangerStage ? '氾濫危険水位超過' : '',
          title: item.water_level ? `${item.water_level} m` : '-',
          water_level: item.water_level,
          location: item.observation_point_name,
          time_value: item.received_timestamp,
          status: icon,
          warning_level_title: '氾濫危険水位超過とは',
          warning_level__subtitle: '河川がいつ氾濫してもおかしくない危険な状況を示す水位です。浸水のおそれのある地域にいる人は自治体からの避難情報などを確認し、避難場所や安全な知人宅への避難など、適切な避難行動をとってください。'
        });
      });
    });

    isInit.value = true;
  }

  const clear = () => {
    mapboxMarker.setAllMarkersUnactive();
    mapboxMarker.hideAllMarkers();
  }

  const registerEvent = async () => {
    clear();
    setup();
    isActive.value = !isActive.value;
    if (!isActive.value) {
      offcanvasRef.value.hide();
      return;
    }

    mapboxMarker.showAllMarkers();
  }

  return {
    button,

    registerEvent,
    clear,
  };
}
