import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const emilySpring: Schedule[] = [
  {
    villager: 'emily',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Emily spring rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      }
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '12:00 PM',
        desc: 'Home',
      },
      {
        time: '3:30 PM',
        desc: 'At the Saloon, working',
      },
      {
        time: '1:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'emily',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Emily spring Tuesday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 1,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '10:00 AM',
        desc: 'At Pierre\'s General Store',
      },
      {
        time: '4:00 PM',
        desc: 'At the Saloon, working',
      },
      {
        time: '12:30 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'emily',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Emily spring Friday at the Community Center',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 4,
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
        time: '10:00 AM',
        desc: 'At the Community Center',
      },
      {
        time: '3:30 PM',
        desc: 'At the Saloon, working',
      },
      {
        time: '12:30 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'emily',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Emily spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '12:00 PM',
        desc: 'Home',
      },
      {
        time: '3:30 PM',
        desc: 'At the Saloon, working',
      },
      {
        time: '12:30 AM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateSeasonalLevelSchedules(emilySpring);
export default emilySpring;
