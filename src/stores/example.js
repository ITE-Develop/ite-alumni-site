import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

export const useExampleStore = defineStore('example', () => {
  const example = ref('')

  const setExample = (example) => {
    example.value = example;
  }

  return {
    example: computed(() => example),

    setExample,
  }
});
