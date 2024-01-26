import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const robin: Schedule[] = [
  {
    villager: 'robin',
    index: 0,
    desc: 'Robin summer 18',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
      {
        type: 'date',
        date: 18,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '7:00 AM',
        desc: 'Home',
      },
      {
        time: '8:00 AM',
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
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'robin',
    index: 1,
    desc: 'Robin winter 16',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
      {
        type: 'date',
        date: 16,
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
        time: '5:00 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'robin',
    index: 2,
    desc: 'Robin rainy day',
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
        time: '7:30 PM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'robin',
    index: 3,
    desc: 'Robin Monday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
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
        time: '5:00 PM',
        desc: 'At the Community Center',
      },
      {
        time: '7:30 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'robin',
    index: 4,
    desc: 'Robin Tuesday',
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
        time: '9:30 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '6:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'robin',
    index: 5,
    desc: 'Robin Friday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 4,
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
    villager: 'robin',
    index: 6,
    desc: 'Robin default',
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
        time: '5:00 PM',
        desc: 'Outside her house',
      },
      {
        time: '7:30 PM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(robin);
export default robin;
