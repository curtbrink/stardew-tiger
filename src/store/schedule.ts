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

        const initialFilter =
          stateStore.marriedTo === villagerId
            ? (s: Schedule) =>
                s.villager === villagerId && s.isMarriage === true
            : (s: Schedule) =>
                s.villager === villagerId && s.isMarriage !== true;

        const villagerSchedules = state.allSchedules.filter(initialFilter);

        // iterate schedules until one matches
        let i = Math.min(...villagerSchedules.map((it) => it.index));
        let matchedSchedule: Schedule | undefined;
        while (!matchedSchedule) {
          const schedToCheck = villagerSchedules.find((s) => s.index === i);
          if (!schedToCheck) {
            // either we ran out of schedules somehow, or this is a default-marriage-schedule situation
            if (stateStore.marriedTo === villagerId) {
              return 'On the farm';
            }
            throw new Error('no schedule found, is there an index gap?');
          }
          // check each condition
          let allPass = true;
          for (const condition of schedToCheck.conditions ?? []) {
            switch (condition.type) {
              case 'season':
                if (
                  Array.isArray(condition.season) &&
                  !condition.season.includes(stateStore.season)
                ) {
                  allPass = false;
                } else if (
                  typeof condition.season === 'string' &&
                  condition.season !== stateStore.season
                ) {
                  allPass = false;
                }
                break;
              case 'weather':
                if (condition.weather !== stateStore.weather) {
                  allPass = false;
                }
                break;
              case 'date':
                if (
                  Array.isArray(condition.date) &&
                  !condition.date.includes(stateStore.date)
                ) {
                  allPass = false;
                } else if (
                  typeof condition.date === 'number' &&
                  condition.date !== stateStore.date
                ) {
                  allPass = false;
                }
                break;
              case 'dayOfWeek':
                // could be array or single
                if (
                  Array.isArray(condition.dayOfWeek) &&
                  !condition.dayOfWeek.includes(stateStore.dayOfWeek)
                ) {
                  allPass = false;
                } else if (
                  typeof condition.dayOfWeek === 'number' &&
                  condition.dayOfWeek !== stateStore.dayOfWeek
                ) {
                  allPass = false;
                }
                break;
              case 'flag':
                if (
                  !condition.flagName ||
                  condition.flagValue === undefined ||
                  !condition.flagCheck
                ) {
                  allPass = false;
                  break;
                }
                // eslint-disable-next-line no-case-declarations
                let valToCheck = stateStore.flags[condition.flagName!];
                if (valToCheck === undefined) {
                  // if flag hasn't been set for some reason, ensure we aren't comparing to null
                  valToCheck =
                    typeof condition.flagValue === 'boolean' ? false : 0;
                }
                // eslint-disable-next-line no-case-declarations
                let valCheckPassed = false;
                switch (condition.flagCheck) {
                  case 'eq':
                    valCheckPassed = valToCheck === condition.flagValue;
                    break;
                  case 'lt':
                    valCheckPassed = valToCheck < condition.flagValue;
                    break;
                  case 'lte':
                    valCheckPassed = valToCheck <= condition.flagValue;
                    break;
                  case 'gt':
                    valCheckPassed = valToCheck > condition.flagValue;
                    break;
                  case 'gte':
                    valCheckPassed = valToCheck >= condition.flagValue;
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

        // at this point, we've found a valid schedule and there are two possibilities assuming valid data:
        // 1. it has a goto pointing at a different schedule, which...
        // 2. it has steps defined
        let scheduleToStep: Schedule | undefined;
        if (matchedSchedule.goto) {
          scheduleToStep = villagerSchedules.find(
            (it) => it.index === matchedSchedule!.goto,
          );
        } else {
          scheduleToStep = matchedSchedule;
        }

        if (!scheduleToStep) {
          throw new Error(`Invalid goto for index ${matchedSchedule.goto}`);
        }

        if (scheduleToStep.goto) {
          throw new Error("multiple goto layers aren't supported lol");
        }

        if (!scheduleToStep.steps) {
          throw new Error("schedule doesn't have any steps!");
        }

        // at this point, we have the right schedule for the current day and game state.
        // now we iterate time values, updating current step if schedule step exists for that time value, until time value matches current time.
        let currentStep = '';
        for (const time of TimeValues) {
          const matchedStep = scheduleToStep.steps.find(
            (step) => step.time === time,
          );
          if (matchedStep) {
            currentStep = matchedStep.desc;
          }
          if (time === stateStore.time) {
            break;
          }
        }
        return currentStep;
      };
    },
  },
  actions: {
    async init() {
      this.allSchedules = allSchedules;
    },
  },
});
