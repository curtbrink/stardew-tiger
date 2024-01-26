import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const maru: Schedule[] = [
  {
    villager: 'maru',
    index: 0,
    desc: 'Maru married but working at the clinic still',
    isMarriage: true,
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [1, 3],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On the farm',
      },
      {
        time: '7:30 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '4:40 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'maru',
    index: 1,
    desc: 'Maru married Monday',
    isMarriage: true,
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
      {
        type: 'weather',
        weather: 'sun',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On the farm',
      },
      {
        time: '8:00 AM',
        desc: 'At the Carpenter Shop',
      },
      {
        time: '2:00 PM',
        desc: 'Outside the Community Center',
      },
      {
        time: '6:00 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'maru',
    index: 2,
    desc: 'Maru winter 16',
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
        time: '9:00 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '3:40 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'maru',
    index: 3,
    desc: 'Maru rainy day',
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
        time: '12:30 PM',
        desc: 'Home',
      },
      {
        time: '4:30 PM',
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
    index: 4,
    desc: 'Maru Tuesday Thursday',
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
    index: 5,
    desc: 'Maru Monday Sunday',
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
    index: 6,
    desc: 'Maru winter Community Center fallback to default',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
      {
        type: 'flag',
        flagName: 'communityCenterRestored',
        flagCheck: 'eq',
        flagValue: false,
      },
    ],
    goto: 9,
  },
  {
    villager: 'maru',
    index: 7,
    desc: 'Maru winter default',
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
        time: '9:00 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: 'At the Community Center',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'maru',
    index: 8,
    desc: 'Maru summer default',
    conditions: [
      {
        type: 'season',
        season: 'summer',
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
        time: '2:00 PM',
        desc: 'At the mountain lake',
      },
      {
        time: '7:00 PM',
        desc: 'Outside her house',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'maru',
    index: 9,
    desc: 'Maru default',
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

validateVillagerLevelSchedules(maru);
export default maru;
