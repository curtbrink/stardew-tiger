import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const demetriusSpring: Schedule[] = [
  {
    villager: 'demetrius',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Demetrius spring rainy day',
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
        time: '7:50 AM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'demetrius',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Demetrius spring Friday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 4,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:50 AM',
        desc: 'Home',
      },
      {
        time: '4:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'demetrius',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Demetrius spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:50 AM',
        desc: 'Home',
      },
      {
        time: '2:30 PM',
        desc: 'Outside his house',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateSeasonalLevelSchedules(demetriusSpring);
export default demetriusSpring;
