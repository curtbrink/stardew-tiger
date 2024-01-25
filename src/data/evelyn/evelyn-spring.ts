import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const evelynSpring: Schedule[] = [
  {
    villager: 'evelyn',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Evelyn spring 2',
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
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Evelyn spring 23',
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
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Evelyn spring rainy day',
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
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Evelyn spring Monday Thursday Saturday at the Community Center',
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
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'Evelyn spring default',
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

validateVillagerLevelSchedules(evelynSpring);
export default evelynSpring;
