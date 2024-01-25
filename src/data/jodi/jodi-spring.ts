import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const jodiSpring: Schedule[] = [
  {
    villager: 'jodi',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Jodi Vincent clinic visit escort',
    conditions: [
      {
        type: 'date',
        date: 11,
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
        time: '11:30 AM',
        desc: 'At the clinic, waiting',
      },
      {
        time: '1:30 AM',
        desc: 'At the clinic, in the exam room',
      },
      {
        time: '4:00 PM',
        desc: "Home, in Vincent's room",
      },
      {
        time: '8:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: "Home, in Vincent's room",
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jodi',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Jodi annual physical spring 18',
    conditions: [
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
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '11:30 AM',
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
        desc: "Home, in Vincent's room",
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jodi',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Jodi spring rainy day',
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
        time: '9:00 PM',
        desc: "Home, in Vincent's room",
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jodi',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Jodi spring Tuesday',
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
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '6:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: "Home, in Vincent's room",
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jodi',
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'Jodi spring Wednesday Friday JojaMart',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [2, 4],
      },
      {
        type: 'flag',
        flagName: 'communityCenterRestored',
        flagCheck: 'eq',
        flagValue: false,
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
        desc: 'At JojaMart',
      },
      {
        time: '5:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: "Home, in Vincent's room",
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jodi',
    type: 'seasonal',
    season: 'spring',
    index: 5,
    desc: "Jodi spring Wednesday Friday Pierre's",
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [2, 4],
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
        desc: "At Pierre's General Store",
      },
      {
        time: '5:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: "Home, in Vincent's room",
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jodi',
    type: 'seasonal',
    season: 'spring',
    index: 6,
    desc: 'Jodi spring Saturday Community Center',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 5,
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
        time: '11:00 AM',
        desc: 'At the Community Center',
      },
      {
        time: '5:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: "Home, in Vincent's room",
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jodi',
    type: 'seasonal',
    season: 'spring',
    index: 7,
    desc: 'Jodi spring Sunday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
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
        time: '10:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: "Home, in Vincent's room",
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jodi',
    type: 'seasonal',
    season: 'spring',
    index: 8,
    desc: 'Jodi spring default',
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
        time: '1:30 PM',
        desc: 'In the town square',
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: "Home, in Vincent's room",
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateSeasonalLevelSchedules(jodiSpring);
export default jodiSpring;
