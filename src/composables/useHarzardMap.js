import useGroupControl from './map_control/useGroupControl';
import { GeolocateControl } from 'mapbox-gl';
import { useRef } from '@/stores/index';

export default function useHarzardMap() {
  const { groupBtn, registerEvent } = useGroupControl();
  const { modalRef,offcanvasRef } = useRef();

  const initMapControl = (map) => {
    map.once("load", () => {
      const geolocate = new GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      });
      geolocate.on('error', () => {
        modalRef.value.show();
      });
      map.addControl(geolocate, 'bottom-right');
      map.addControl(groupBtn[1], 'bottom-right');
      map.addControl(groupBtn[0], 'bottom-right');

      registerEvent();
    })
  }

  const registerClickOnMap = (map) => {
    map.on('click', () => {
      offcanvasRef.value.hide();
    })
  }

  const init = (map, option = {}) => {
    registerClickOnMap(map);
    initMapControl(map);
  }

  return {
    init,
  };
}
