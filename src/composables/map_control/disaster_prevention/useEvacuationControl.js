import { ref } from "vue";
import { useRef, useMapConfig } from "@/stores/index";
import { useMapBoxMarker } from "@/composables/index";

import { useEvacuation } from "@/stores/index";

/**
 * Evacuation Controller
 */
export default function useEvacuationControl() {
  const { offcanvasRef, settingRef, helperRef, mapRef } = useRef();
  const { evacuation_level_marker, marker_symbol } = useMapConfig();
  const { all } = useEvacuation();

  const mapboxMarker = useMapBoxMarker();
  const isInit = ref(false);
  const isActive = ref(false);


  const button = {
    id: 'evacuation',
    radiusStyle: 'top',
    text: "避難先",
    iconClass: "sb-icon sb-icon-evacuation"
  }

  const settingMenu = [
    {
      id: "facility",
      name: "一時滞在施設\n（帰宅困難者受入施設）",
      icon: marker_symbol.evacuation.facility,
      image: "sb-image-facility-helper",
      description: "地震などの災害時に外出先からの帰宅が困難となった方が帰宅可能になるまでの間、一時的に受け入れる施設です。"
    },
    {
      id: "refuge",
      name: "避難所（区民避難所）",
      icon: marker_symbol.evacuation.refuge,
      image: "sb-image-refuge-helper",
      description: "災害により住宅を失った場合等において、一定期間避難生活をする場所として、あらかじめ自治体が指定した施設です。"
    },
    {
      id: "tsunami",
      name: "津波避難ビル",
      icon: marker_symbol.evacuation.tsunami,
      image: "sb-image-tsunami-helper",
      description: "津波から避難する際に、逃げ遅れた人などが緊急的に避難する施設のことで、あらかじめ自治体が指定した建物です。"
    },
  ];

  const setup = async () => {
    if (isInit.value) {
      return;
    }

    mapboxMarker.setup({
      flyToActive: true,
      allowMultipleActive: false,
      markerImage: evacuation_level_marker
    });

    // unfocus marker during map click
    mapRef.value.on('click', (e) => {
      if (!isActive.value || !isInit.value) {
        return;
      }
      mapboxMarker.setAllMarkersUnactive();
    });

    const items = [];
    const evacuation = await all();
    evacuation?.data.forEach((item) => {
      let icon = marker_symbol.evacuation.none;
      let helperDescription = '';
      let helperImage = '';
      switch (item.type) {
        case 'site':
          icon = marker_symbol.evacuation.site;
          helperImage = 'sb-image-site-helper';
          helperDescription = '災害により住宅を失った場合等において、一定期間避難生活をする場所として、あらかじめ自治体が指定した施設です。'
          break;
        case 'refuge':
          icon = marker_symbol.evacuation.refuge;
          helperDescription = '災害により住宅を失った場合等において、一定期間避難生活をする場所として、あらかじめ自治体が指定した施設です。'
          helperImage = 'sb-image-refuge-helper';
          break;
        case 'facility':
          icon = marker_symbol.evacuation.facility;
          helperDescription = '地震などの災害時に外出先からの帰宅が困難となった方が帰宅可能になるまでの間、一時的に受け入れる施設です。'
          helperImage = 'sb-image-facility-helper';
          break;
        case 'tsunami':
          icon = marker_symbol.evacuation.tsunami;
          helperDescription = '津波から避難する際に、逃げ遅れた人などが緊急的に避難する施設のことで、あらかじめ自治体が指定した建物です。'
          helperImage = 'sb-image-tsunami-helper';
          break;
      }

      mapboxMarker.addMarker({
        id: item.id,
        coordinate: item.coordinate,
        icon: icon,
        iconSize: 0.33,
      }, () => {
        offcanvasRef.value.show();          //display offcanvas when marker is clicked
        settingRef.value.hide();            //hide setting checkbox when marker is clicked
        helperRef.value.hide();             //hide helper when marker is clicked
        offcanvasRef.value.updateContent({  //update offcanvas content when marker is clicked
          offcanvasKey: 'evacuation',
          badge: '氾濫注意水位',
          title: item.title,
          location: item.location,
          evacuation_target: item.evacuation_target,
          description: item.description,
          status_system: item.status_system,
          url: item.url,
          openHelper: () => {         //open helper when helper button is clicked
            helperRef.value.show();
          },
        });
        helperRef.value.updateContent({     //update helper content when marker is clicked
          title: item.location,
          description: helperDescription,
          image: helperImage,
          onClose: () => {
          }
        });
      });
    });


    settingMenu.forEach((item) => {
      items.push({
        id: item.id,
        name: item.name,
        icon: item.icon,
        checked: true,
        onChecked: (ev) => {
          let markers = Object.keys(mapboxMarker.markers.value);
          markers = markers.filter((marker) => marker.startsWith(`${item.id}`));
          markers.forEach((marker) => {
            mapboxMarker.toggleMarker(marker, ev.target.checked);
          })
        },
        onHelpClick: () => {
          helperRef.value.show();

          helperRef.value.updateContent({     //update helper content when marker is clicked
            title: item.name,
            description: item.description,
            announcement: item.announcement,
            image: item.image,
            onClose: () => {
            }
          });
        },
      })
    })

    // Display Evacuation Marker Setting
    settingRef.value.show();
    settingRef.value.updateContent({items})
    isInit.value = true;
  }

  const clear = () => {
    mapboxMarker.setAllMarkersUnactive();
    mapboxMarker.hideAllMarkers();
  }

  const showSetting = () => {
    isActive.value = !isActive.value;
    if (!isActive.value) {
      offcanvasRef.value.hide();
      settingRef.value.hide();
      clear();
      return;
    }
    settingRef.value.show();
    offcanvasRef.value.hide();
    mapboxMarker.showAllMarkers();
  }

  const registerEvent = async () => {
    clear();
    setup();
    showSetting();
  }

  return {
    button,
    registerEvent,

    clear,
  };
}
