import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const evelyn: Schedule[] = [
  {
    villager: 'evelyn',
    index: 0,
    desc: 'Evelyn winter 17',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
      {
        type: 'date',
        date: 17,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '4:30 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'evelyn',
    index: 1,
    desc: 'Evelyn 2nd monthly',
    conditions: [
      {
        type: 'date',
        date: 2,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
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
        desc: 'Home',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'evelyn',
    index: 2,
    desc: 'Evelyn 23rd monthly',
    conditions: [
      {
        type: 'date',
        date: 23,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:40 AM',
        desc: 'At the clinic, waiting',
      },
      {
        time: '1:30 PM',
        desc: 'At the clinic, in the exam room',
      },
      {
        time: '4:10 PM',
        desc: 'Home',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'evelyn',
    index: 3,
    desc: 'Evelyn rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'evelyn',
    index: 4,
    desc: 'Evelyn Monday Thursday Saturday at the Community Center',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [0, 3, 5],
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
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '12:10 PM',
        desc: 'At the Community Center',
      },
      {
        time: '4:30 PM',
        desc: 'Home',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'evelyn',
    index: 5,
    desc: 'Evelyn Monday Thursday Saturday fallback to spring',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [0, 3, 5],
      },
    ],
    goto: 7,
  },
  {
    villager: 'evelyn',
    index: 6,
    desc: 'Evelyn winter default',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'evelyn',
    index: 7,
    desc: 'Evelyn default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '1:00 PM',
        desc: 'In the town square',
      },
      {
        time: '4:30 PM',
        desc: 'Home',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(evelyn);
export default evelyn;
