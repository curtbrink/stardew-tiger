import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const gusSpring: Schedule[] = [
  {
    villager: 'gus',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Gus spring rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '12:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'gus',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Gus spring Monday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:30 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '11:00 AM',
        desc: 'At the Saloon',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'gus',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Gus spring Tuesday at the Community Center',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 1,
      },
      {
        type: 'flag',
        flagName: 'communityCenterRestored',
        flagCheck: 'eq',
        flagValue: true,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:30 AM',
        desc: 'At the Community Center',
      },
      {
        time: '12:30 PM',
        desc: 'At the Saloon',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'gus',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Gus spring Sunday gridball',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
      },
      {
        type: 'flag',
        flagName: 'saloonGridballRoom',
        flagCheck: 'eq',
        flagValue: true,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '11:40 AM',
        desc: 'At the Saloon',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'gus',
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'Gus spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '12:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateSeasonalLevelSchedules(gusSpring);
export default gusSpring;
