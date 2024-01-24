import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const leahSpring: Schedule[] = [
  {
    villager: 'leah',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Leah annual physical spring 16',
    conditions: [
      {
        type: 'date',
        date: 16,
      }
    ],
    steps: [
      {
        time: '6:00 AM',
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
        desc: 'At the Saloon',
      },
      {
        time: '11:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Leah spring rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '4:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Leah spring Friday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 4,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '4:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Leah spring Saturday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 5,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '4:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'Leah spring Monday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: 'At Pierre\'s General Store',
      },
      {
        time: '5:00 PM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      }
    ],
  },
  {
    villager: 'leah',
    type: 'seasonal',
    season: 'spring',
    index: 5,
    desc: 'Leah spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '12:00 PM',
        desc: 'Outside her house',
      },
      {
        time: '3:00 PM',
        desc: 'At the forest pond',
      },
      {
        time: '7:30 PM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateSeasonalLevelSchedules(leahSpring);
export default leahSpring;
