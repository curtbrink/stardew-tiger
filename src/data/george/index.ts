import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const george: Schedule[] = [
  {
    villager: 'george',
    index: 0,
    desc: 'George winter 17',
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
        desc: 'Home, in his room',
      },
      {
        time: '6:30 AM',
        desc: 'Home',
      },
      {
        time: '4:20 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'george',
    index: 1,
    desc: 'George 23rd monthly',
    conditions: [
      {
        type: 'date',
        date: 23,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '6:30 AM',
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
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'george',
    index: 2,
    desc: 'George rainy day',
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
        time: '6:30 AM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'george',
    index: 3,
    desc: 'George summer Friday',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
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
        time: '6:30 AM',
        desc: 'Home',
      },
      {
        time: '12:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '3:00 PM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'george',
    index: 4,
    desc: 'George Sunday gridball',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
      },
      {
        type: 'flag',
        flagName: 'saloonGridballRoom',
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
        time: '6:30 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: 'At the Saloon',
      },
      {
        time: '3:00 PM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'george',
    index: 5,
    desc: 'George Sunday no gridball :(',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '6:30 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '2:00 PM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'george',
    index: 6,
    desc: 'George default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '6:30 AM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(george);
export default george;
