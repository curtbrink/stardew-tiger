import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const jodi: Schedule[] = [
  {
    villager: 'jodi',
    index: 0,
    desc: 'Jodi Vincent clinic visit escort',
    conditions: [
      {
        type: 'season',
        season: 'spring',
      },
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
        time: '1:30 PM',
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
    index: 1,
    desc: 'Jodi annual physical spring 18',
    conditions: [
      {
        type: 'season',
        season: 'spring',
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
    index: 2,
    desc: 'Jodi winter 17',
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
        time: '9:00 AM',
        desc: 'Home',
      },
      {
        time: '2:00 PM',
        desc: 'At the Community Center fountain',
      },
      {
        time: '4:30 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jodi',
    index: 3,
    desc: 'Jodi rainy day',
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
    index: 4,
    desc: 'Jodi Tuesday',
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
    index: 5,
    desc: 'Jodi Wednesday Friday JojaMart',
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
    index: 6,
    desc: "Jodi Wednesday Friday Pierre's",
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
    index: 7,
    desc: 'Jodi Saturday at the Community Center',
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
    index: 8,
    desc: 'Jodi Sunday',
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
    index: 9,
    desc: 'Jodi default',
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

validateVillagerLevelSchedules(jodi);
export default jodi;
