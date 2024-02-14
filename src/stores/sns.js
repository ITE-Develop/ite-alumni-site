/*
import { ref, computed } from "vue";
import { defineStore } from 'pinia';
import TwitterService from '@/services/TwitterService';

export const useSNSStore = defineStore('sns', () => {
  const isLoading = ref(false);

  const all = (data) => {
    isLoading.value = true;
    const res = TwitterService.index(data).then((res) => {
      return res;
    }).finally(() => {
      isLoading.value = false;
    });

    return res;
  }

  return {
    isLoading: computed(() => isLoading),
    all
  }
});
*/
