import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const clintSpring: Schedule[] = [
  {
    villager: 'clint',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Clint spring Friday Community Center',
    conditions: [
      {
        type: 'weather',
        weather: 'sun',
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
        time: '8:50 AM',
        desc: 'At the Community Center',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'clint',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Clint spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '9:00 AM',
        desc: 'Home, working',
      },
      {
        time: '5:00 PM',
        desc: 'Home',
      },
      {
        time: '7:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateSeasonalLevelSchedules(clintSpring);
export default clintSpring;
