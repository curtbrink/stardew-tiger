export type Season = 'spring' | 'summer' | 'fall' | 'winter';
export type Weather = 'sun' | 'rain';

export type ScheduleCondition = {
  type: 'weather' | 'date' | 'dayOfWeek' | 'flag';
  weather?: Weather;
  date?: number | number[];
  dayOfWeek?: number | number[];
  flagName?: string;
  flagCheck?: 'gt' | 'gte' | 'eq' | 'lte' | 'lt';
  flagValue?: number | boolean;
};

export type ScheduleStep = {
  time: string;
  desc: string;
};

export type Schedule = {
  villager: string;
  index: number;
  desc: string;
  type: 'seasonal' | 'marriage';
  season?: Season;
  conditions?: ScheduleCondition[];
  steps: ScheduleStep[];
};

const minuteVals = ['00', '10', '20', '30', '40', '50'];
const times = [] as string[];
for (let i = 6; i < 12; i++) {
  for (const j of minuteVals) {
    times.push(`${i}:${j} AM`);
  }
}
for (const j of minuteVals) {
  times.push(`12:${j} PM`);
}
for (let i = 1; i < 12; i++) {
  for (const j of minuteVals) {
    times.push(`${i}:${j} PM`);
  }
}
for (const j of minuteVals) {
  times.push(`12:${j} AM`);
}
for (const j of minuteVals) {
  times.push(`1:${j} AM`);
}
times.push('2:00 AM');

export const TimeValues = times;
