import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const maruSpring: Schedule[] = [
  {
    villager: 'maru',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Maru spring rainy day',
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
        time: '12:50 PM',
        desc: 'Home',
      },
      {
        time: '4:40 PM',
        desc: 'Home, in her room',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'maru',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Maru spring Tuesday Thursday (first attempt at multi day)',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [1, 3],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '4:40 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'maru',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Maru spring Monday Sunday (another attempt at multi day)',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [0, 6],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '10:00 AM',
        desc: 'Home',
      },
      {
        time: '1:30 PM',
        desc: 'Outside the Saloon',
      },
      {
        time: '6:30 PM',
        desc: 'Home, in her room',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'maru',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Maru spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '10:20 AM',
        desc: 'Home',
      },
      {
        time: '2:00 PM',
        desc: 'Outside the Community Center',
      },
      {
        time: '6:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateSeasonalLevelSchedules(maruSpring);
export default maruSpring;
