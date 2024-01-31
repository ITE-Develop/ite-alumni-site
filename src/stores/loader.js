import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

// export action name
export const useLoaderStore = defineStore('loader', () => {
  const isLoading = ref(false);

  const setLoading = (isLoading = true) => {
    isLoading.value = isLoading;
  }

  return {
    isLoading: computed(() => isLoading),

    setLoading,
  }
});
