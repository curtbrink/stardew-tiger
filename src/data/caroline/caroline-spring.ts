import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const carolineSpring: Schedule[] = [
  {
    villager: 'caroline',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Caroline spring rainy day',
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
        desc: "At Pierre's General Store",
      },
      {
        time: '1:30 PM',
        desc: 'Home, in her room',
      },
      {
        time: '4:00 PM',
        desc: "At Pierre's General Store",
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'caroline',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Caroline spring Tuesday',
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
        desc: "At Pierre's General Store",
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'caroline',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Caroline spring Wednesday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 2,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '10:00 AM',
        desc: 'Home, in her private sunroom',
      },
      {
        time: '12:00 PM',
        desc: 'At the Community Center fountain',
      },
      {
        time: '5:00 PM',
        desc: "At Pierre's General Store",
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'caroline',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Caroline spring Friday',
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
        desc: "At Pierre's General Store",
      },
      {
        time: '10:00 AM',
        desc: 'Home, in her private sunroom',
      },
      {
        time: '12:00 PM',
        desc: 'At the Museum',
      },
      {
        time: '5:00 PM',
        desc: "At Pierre's General Store",
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'caroline',
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'Caroline spring Saturday with Community Center accessible',
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
        time: '10:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '11:00 AM',
        desc: 'At the Community Center',
      },
      {
        time: '5:00 PM',
        desc: "At Pierre's General Store",
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'caroline',
    type: 'seasonal',
    season: 'spring',
    index: 5,
    desc: 'Caroline spring Sunday',
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
        time: '1:30 PM',
        desc: "At Pierre's General Store",
      },
      {
        time: '2:40 PM',
        desc: 'Outside the Community Center',
      },
      {
        time: '6:30 PM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'caroline',
    type: 'seasonal',
    season: 'spring',
    index: 6,
    desc: 'Caroline spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '10:00 AM',
        desc: 'Home, in her private sunroom',
      },
      {
        time: '12:00 PM',
        desc: "At Pierre's General Store",
      },
      {
        time: '1:30 PM',
        desc: 'In the town square',
      },
      {
        time: '4:00 PM',
        desc: "At Pierre's General Store",
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(carolineSpring);
export default carolineSpring;
