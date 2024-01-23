// Utilities
import { defineStore } from 'pinia';
import { Season, Weather } from '@/data/types';
import browserStorageService from '@/services/browser-storage.service';

type Flags = {
  [key: string]: number | boolean,
  communityCenterRestored: boolean,
  haleyRelationship: number,
  leahRelationship: number,
}

type GameState = {
  hasAttemptedLoad: boolean,
  timestamp: number,
  season: Season,
  date: number,
  weather: Weather,
  time: string,
  dayOfWeek: number,
  marriedTo: string,
  flags: Flags,
}

export const useGlobalGameStateStore = defineStore('globalState', {
  state: (): GameState => ({
    hasAttemptedLoad: false,
    timestamp: Date.now(),
    season: 'spring',
    date: 1,
    weather: 'sun',
    time: '6:00 AM',
    dayOfWeek: 0,
    marriedTo: 'single',
    flags: {
      communityCenterRestored: false,
      haleyRelationship: 0,
      leahRelationship: 0,
    } as Flags,
  } as GameState),
  getters: {
    getFlagValue(state: GameState) {
      return (flagName: string) => state.flags[flagName];
    },
    getTimestamp(state: GameState) {
      return state.timestamp;
    },
    browserLoadAttempted(state: GameState) {
      return state.hasAttemptedLoad;
    }
  },
  actions: {
    async setGlobalGameState(newState: { season: Season, date: number, weather: Weather, time: string, marriedTo: string }, newFlags?: Flags) {
      this.season = newState.season;
      this.date = newState.date;
      this.weather = newState.weather;
      this.dayOfWeek = (newState.date - 1) % 7;
      this.time = newState.time;
      this.marriedTo = newState.marriedTo;
      if (newFlags) {
        this.flags = newFlags;
      }
      this.timestamp = Date.now();
      await this.saveStateToBrowser();
    },
    async setFlagValue(flagName: string, flagValue: number | boolean) {
      this.flags[flagName] = flagValue;
    },
    async loadStateFromBrowser() {
      const loaded = browserStorageService.getGameState();
      if (loaded) {
        await this.setGlobalGameState({ season: loaded.season, date: loaded.date, weather: loaded.weather, time: loaded.time, marriedTo: loaded.marriedTo }, loaded.flags);
      }
      this.hasAttemptedLoad = true;
    },
    async saveStateToBrowser() {
      const saveData = {
        season: this.season,
        date: this.date,
        weather: this.weather,
        time: this.time,
        marriedTo: this.marriedTo,
        flags: this.flags,
      };
      browserStorageService.setGameState(saveData);
    }
  },
});
