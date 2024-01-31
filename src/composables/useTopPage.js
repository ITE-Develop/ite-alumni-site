import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

export default function useTopPage() {
  const { t } = useI18n();

  const disasterPreventionBtn = ref([
    {
      id: "1",
      button: {
        label: t('top.prevention_info'),
        icon: "sb-icon-volume-up",
        link: "https://www.city.minato.tokyo.jp/system/bousai_list.html"
      }
    },

    {
      id: "2",
      button: {
        label: t('top.hazard_map'),
        icon: "sb-icon-map",
        link: "/takeshiba/harzard-map",
        query: {
          display: "flood"
        }
      }
    },
    {
      id: "3",
      button: {
        label: t('top.warning'),
        icon: "sb-icon-warning",
        link: "https://www.jma.go.jp/bosai/warning/#area_type=class20s&area_code=1310300"
      }
    },
    {
      id: "4",
      button: {
        label: t('top.evacuation'),
        icon: "sb-icon-run",
        link: "/takeshiba/harzard-map",
        query: {
          display: "evacuation"
        }
      }
    },
  ]);

  const disasterInformationBtn = ref([
    {
      id: "1",
      button: {
        label: t('top.forecast'),
        icon: "sb-icon-sunny",
        link: "https://weather.yahoo.co.jp/weather"
      }
    },
    {
      id: "2",
      button: {
        label: t('top.rain'),
        icon: "sb-icon-rain",
        // link: "/takeshiba/harzard-map"
        link: "https://weather.yahoo.co.jp/weather/zoomradar/",
      }
    },
    {
      id: "3",
      button: {
        label: t('top.typhoon'),
        icon: "sb-icon-typhoon",
        link: "https://www.jma.go.jp/bosai/map.html#contents=typhoon"
      }
    },

    {
      id: "4",
      button: {
        label: t('top.earthquake'),
        icon: "sb-icon-earthquake",
        link: "https://www.jma.go.jp/bosai/map.html#contents=earthquake_map"
      }
    },
    {
      id: "5",
      button: {
        label: t('top.tsunami'),
        icon: "sb-icon-tsunami",
        link: "https://www.jma.go.jp/bosai/map.html#5/38/135/&elem=warn&contents=tsunami"
      }
    },
    {
      id: "6",
      button: {
        label: t('top.snow'),
        icon: "sb-icon-snow",
        link: "https://www.jma.go.jp/bosai/snow/#lat:37.996163/lon:138.933105/zoom:5/colordepth:deep/elements:snowf24h"
      }
    },
  ]);
  return {
    disaster_prevention: computed(() => disasterPreventionBtn.value),
    disaster_information: computed(() => disasterInformationBtn.value)
  };

}


