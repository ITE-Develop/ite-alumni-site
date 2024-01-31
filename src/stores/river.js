import {defineStore} from 'pinia';
import RiverService from '@/services/RiverService';

// export action name
export const useRiverStore = defineStore('river', () => {

  const all = async () => {
    return RiverService.index();
  }

  return {
    all
  }
});
