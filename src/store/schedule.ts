// Utilities
import { defineStore } from 'pinia';
import allSchedules from '../data';
import { Schedule, TimeValues } from '@/data/types';
import { useGlobalGameStateStore } from '@/store/globalState';

export const useScheduleStore = defineStore('schedule', {
  state: () => ({
    allSchedules: [] as Schedule[],
  }),
  getters: {
    getCurrentScheduleStepForVillager(state) {
      return (villagerId: string) => {
        // console.log('finding scheddy for ' + villagerId);
        // console.log('total schedules: ' + this.allSchedules.length);
        const stateStore = useGlobalGameStateStore();
        const scheduleFilter = stateStore.marriedTo === villagerId
          ? (s: Schedule) => (s.villager === villagerId && s.type === 'marriage')
          : (s: Schedule) => (s.villager === villagerId && s.type === 'seasonal' && s.season === stateStore.season);
        const villagerSchedules = state.allSchedules.filter(scheduleFilter);
        // console.log('filtered by season and marriage down to ' + villagerSchedules.length + ' schedules to check');
        // iterate schedules until one matches
        let i = 0;
        let matchedSchedule;
        while (!matchedSchedule) {
          const schedToCheck = villagerSchedules.find((s) => s.index === i);
          if (!schedToCheck) {
            throw new Error('no schedule found, is there an index gap?');
          }
          // check each condition
          let allPass = true;
          for (const condition of schedToCheck.conditions ?? []) {
            switch (condition.type) {
              case "weather":
                if (condition.weather !== stateStore.weather) {
                  allPass = false;
                }
                break;
              case "date":
                if (condition.date !== stateStore.date) {
                  allPass = false;
                }
                break;
              case "dayOfWeek":
                if (condition.dayOfWeek !== stateStore.dayOfWeek) {
                  allPass = false;
                }
                break;
              case "flag":
                if (!condition.flagName || condition.flagValue === undefined || !condition.flagCheck) {
                  allPass = false;
                  break;
                }
                // eslint-disable-next-line no-case-declarations
                const valToCheck = stateStore.flags[condition.flagName!];
                // eslint-disable-next-line no-case-declarations
                let valCheckPassed = false;
                switch (condition.flagCheck) {
                  case 'eq':
                    valCheckPassed = (valToCheck === condition.flagValue);
                    break;
                  case 'lt':
                    valCheckPassed = (valToCheck < condition.flagValue);
                    break;
                  case 'lte':
                    valCheckPassed = (valToCheck <= condition.flagValue);
                    break;
                  case 'gt':
                    valCheckPassed = (valToCheck > condition.flagValue);
                    break;
                  case 'gte':
                    valCheckPassed = (valToCheck >= condition.flagValue);
                }
                if (!valCheckPassed) {
                  allPass = false;
                }
                break;
            }
          }
          if (allPass) {
            matchedSchedule = schedToCheck;
            // console.log('matched schedule: "' + matchedSchedule.desc + '"');
          }
          i++;
        }

        // at this point, we have the right schedule for the current day and game state.
        // now we iterate time values, updating current step if schedule step exists for that time value, until time value matches current time.
        let currentStep = '';
        for (const time of TimeValues) {
          const matchedStep = matchedSchedule.steps.find((step) => step.time === time);
          if (matchedStep) {
            currentStep = matchedStep.desc;
          }
          if (time === stateStore.time) {
            break;
          }
        }
        return currentStep;
      }
    }
  },
  actions: {
    async init() {
      this.allSchedules = allSchedules;
    }
  },
});
