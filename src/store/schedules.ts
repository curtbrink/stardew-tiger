// Utilities
import { defineStore } from 'pinia';

export const useScheduleStore = defineStore('schedules', {
  state: () => ({
  }),
  getters: {
  },
  actions: {
    async ensureLoaded() {
      return 2;
    },
  },
});
