import { Schedule } from '@/data/types';

export const validateSeasonalLevelSchedules = (schedules: Schedule[]) => {
  // find maximum index
  const maxIndex = Math.max(...schedules.map((it) => it.index));
  // ensure one of each index up to max
  for (let i = 0; i < maxIndex; i++) {
    const indexed = schedules.filter((it) => it.index === i);
    if (indexed.length !== 1) {
      throw new Error(
        'Invalid schedules for villager named ' + schedules[0].villager,
      );
    }
  }

  // ensure all steps of all schedules have correctly formatted time
  const regex = /[1-9][0-9]*:[0-5]0\s[PA]M/g;
  for (const schedule of schedules) {
    for (const step of schedule.steps) {
      if (!step.time.match(regex)) {
        throw new Error(
          `Invalid timestamp ${step.time} for schedule ${schedule.desc}`,
        );
      }
    }
  }

  // ensure conditions make sense
  for (const schedule of schedules) {
    for (const condition of schedule.conditions ?? []) {
      switch (condition.type) {
        case 'weather':
          if (!condition.weather)
            throw new Error(`Invalid condition for schedule ${schedule.desc}`);
          break;
        case 'date':
          if (
            condition.date === undefined ||
            condition.date < 1 ||
            condition.date > 28
          )
            throw new Error(`Invalid condition for schedule ${schedule.desc}`);
          break;
        case 'dayOfWeek':
          if (
            condition.dayOfWeek === undefined ||
            (Array.isArray(condition.dayOfWeek) &&
              (condition.dayOfWeek.length === 0 ||
                condition.dayOfWeek.some((d) => d < 0 || d > 6))) ||
            (typeof condition.dayOfWeek === 'number' &&
              (condition.dayOfWeek < 0 || condition.dayOfWeek > 6))
          ) {
            throw new Error(`Invalid condition for schedule ${schedule.desc}`);
          }
          break;
        case 'flag':
          if (
            !condition.flagName ||
            !condition.flagCheck ||
            condition.flagValue === undefined
          )
            throw new Error(`Invalid condition for schedule ${schedule.desc}`);
          break;
      }
    }
  }

  // ensure at least one default with no conditions
  const filtered = schedules.filter((it) => !it.conditions);
  if (filtered.length === 0) {
    throw new Error(
      `No default ${schedules[0].season} schedule found for ${schedules[0].villager}`,
    );
  }

  console.log(
    `Successfully validated ${schedules[0].season} schedules for ${schedules[0].villager}`,
  );
};
