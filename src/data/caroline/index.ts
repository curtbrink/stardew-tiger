import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const caroline: Schedule[] = [
  {
    villager: 'caroline',
    index: 0,
    desc: 'Caroline fall 25',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
      {
        type: 'date',
        date: 25,
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
        desc: 'Home, in her room',
      },
      {
        time: '12:00 PM',
        desc: 'At the clinic, waiting',
      },
      {
        time: '1:30 PM',
        desc: 'At the clinic, in the exam room',
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
    index: 1,
    desc: 'Caroline winter 16',
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
        desc: "At Pierre's General Store",
      },
      {
        time: '1:30 PM',
        desc: 'In the town square',
      },
      {
        time: '4:00 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'caroline',
    index: 2,
    desc: 'Caroline rainy day',
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
    index: 3,
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
    index: 4,
    desc: 'Caroline Wednesday',
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
    index: 5,
    desc: 'Caroline Friday',
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
    index: 6,
    desc: 'Caroline Saturday with Community Center accessible',
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
    index: 7,
    desc: 'Caroline Sunday',
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
    index: 8,
    desc: 'Caroline default',
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

validateVillagerLevelSchedules(caroline);
export default caroline;
