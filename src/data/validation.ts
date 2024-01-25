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
    for (const step of schedule.steps ?? []) {
      if (!step.time.match(regex)) {
        throw new Error(
          `Invalid timestamp ${step.time} for schedule ${schedule.desc}`,
        );
      }
    }
  }

  // ensure conditions make sense
  const errorMsg = (sched: Schedule) =>
    `Invalid condition for schedule ${sched.desc}`;
  for (const schedule of schedules) {
    for (const condition of schedule.conditions ?? []) {
      switch (condition.type) {
        case 'season':
          if (!condition.season) {
            throw new Error(errorMsg(schedule));
          }
          break;
        case 'weather':
          if (!condition.weather) throw new Error(errorMsg(schedule));
          break;
        case 'date':
          if (
            condition.date === undefined ||
            (Array.isArray(condition.date) &&
              (condition.date.length === 0 ||
                condition.date.some((d) => d < 1 || d > 28))) ||
            (typeof condition.date === 'number' &&
              (condition.date < 1 || condition.date > 28))
          )
            throw new Error(errorMsg(schedule));
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
            throw new Error(errorMsg(schedule));
          }
          break;
        case 'flag':
          if (
            !condition.flagName ||
            !condition.flagCheck ||
            condition.flagValue === undefined
          )
            throw new Error(errorMsg(schedule));
          break;
      }
    }
  }

  // ensure at least one default with no conditions
  const filtered = schedules.filter((it) => !it.conditions);
  if (filtered.length === 0) {
    throw new Error(`No default schedule found for ${schedules[0].villager}`);
  }

  // ensure gotos are valid
  const filteredGotos = schedules.filter((it) => it.goto !== undefined);
  for (const schedule of filteredGotos) {
    const gotoSchedule = schedules.find((it) => it.index === schedule.goto);
    if (!gotoSchedule) {
      throw new Error(`Schedule ${schedule.desc} has an invalid GOTO`);
    }
  }

  console.log(`Successfully validated schedules for ${schedules[0].villager}`);
};
