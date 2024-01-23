import { Schedule } from '@/data/types';

export const validateSeasonalLevelSchedules = (schedules: Schedule[]) => {
  // find maximum index
  const maxIndex = Math.max(...schedules.map((it) => it.index));
  // ensure one of each index up to max
  for (let i = 0; i < maxIndex; i++) {
    const indexed = schedules.filter((it) => it.index === i);
    if (indexed.length !== 1) {
      throw new Error('Invalid schedules for villager named ' + schedules[0].villager);
    }
  }

  // ensure all steps of all schedules have correctly formatted time
  const regex = /[1-9][0-9]*:[0-5]0\s[PA]M/g;
  for (const schedule of schedules) {
    for (const step of schedule.steps) {
      if (!step.time.match(regex)) {
        throw new Error(`Invalid timestamp ${step.time} for schedule ${schedule.desc}`);
      }
    }
  }

  // ensure at least one default with no conditions
  const filtered = schedules.filter((it) => !it.conditions);
  if (filtered.length === 0) {
    throw new Error(`No default ${schedules[0].season} schedule found for ${schedules[0].villager}`);
  }

  console.log(`Successfully validated ${schedules[0].season} schedules for ${schedules[0].villager}`);
}
