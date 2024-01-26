import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const gus: Schedule[] = [
  {
    villager: 'gus',
    index: 0,
    desc: 'Gus annual physical fall 4',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
      {
        type: 'date',
        date: 4,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '10:30 AM',
        desc: 'At the clinic, waiting',
      },
      {
        time: '1:30 PM',
        desc: 'At the clinic, in the exam room',
      },
      {
        time: '4:00 PM',
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
    index: 1,
    desc: 'Gus rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    goto: 5,
  },
  {
    villager: 'gus',
    index: 2,
    desc: 'Gus Monday',
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
    index: 3,
    desc: 'Gus Tuesday at the Community Center',
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
    index: 4,
    desc: 'Gus Sunday gridball',
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
    index: 5,
    desc: 'Gus default',
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

validateVillagerLevelSchedules(gus);
export default gus;
