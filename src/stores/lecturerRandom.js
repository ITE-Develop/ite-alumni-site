import {defineStore} from 'pinia';
import LecturerRandom from '@/services/LecturerRandomService.js';

// export action name
export const useLecturerRandomStore = defineStore('lecturer-random', () => {

  const all = async () => {
    return LecturerRandom.index();
  }

  return {
    all
  }
});
