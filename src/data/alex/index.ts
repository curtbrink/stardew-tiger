import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const alex: Schedule[] = [
  {
    villager: 'alex',
    index: 0,
    desc: 'Alex married Monday',
    isMarriage: true,
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On the farm',
      },
      {
        time: '8:30 AM',
        desc: "At George and Evelyn's house",
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
    villager: 'alex',
    index: 1,
    desc: 'Alex married Sunday gridball',
    isMarriage: true,
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
        desc: 'On the farm',
      },
      {
        time: '8:30 AM',
        desc: "Outside George and Evelyn's house",
      },
      {
        time: '11:00 AM',
        desc: 'At the Saloon',
      },
      {
        time: '3:00 PM',
        desc: "Outside George and Evelyn's house",
      },
      {
        time: '6:30 PM',
        desc: "At George and Evelyn's house",
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'alex',
    index: 2,
    desc: 'Alex annual physical summer 16',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
      {
        type: 'date',
        date: 16,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Outside his house',
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
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'alex',
    index: 3,
    desc: 'Alex winter 17',
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
        time: '9:00 AM',
        desc: 'At the Spa',
      },
      {
        time: '3:00 PM',
        desc: 'At the Night Market',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'alex',
    index: 4,
    desc: 'Alex rainy day',
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
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '1:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '4:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '6:30 PM',
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
    villager: 'alex',
    index: 5,
    desc: 'Alex Wednesday Haley time <3',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 2,
      },
      {
        type: 'flag',
        flagName: 'haleyRelationship',
        flagCheck: 'lt',
        flagValue: 6,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '12:00 PM',
        desc: "At Haley and Emily's House",
      },
      {
        time: '4:30 PM',
        desc: 'Outside his house',
      },
      {
        time: '6:40 PM',
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
    villager: 'alex',
    index: 6,
    desc: 'Alex Wednesday Haley fallback to spring',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 2,
      },
    ],
    goto: 10,
  },
  {
    villager: 'alex',
    index: 7,
    desc: 'Alex spring Sunday gridball',
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
        time: '8:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '11:00 AM',
        desc: 'At the Saloon',
      },
      {
        time: '3:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '6:30 PM',
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
    villager: 'alex',
    index: 8,
    desc: 'Alex winter default',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '9:00 AM',
        desc: 'At the Spa',
      },
      {
        time: '3:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '6:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '7:30 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'alex',
    index: 9,
    desc: 'Alex summer default',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:30 AM',
        desc: 'At the beach',
      },
      {
        time: '12:00 PM',
        desc: 'Working the ice cream stand',
      },
      {
        time: '5:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '7:00 PM',
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
    villager: 'alex',
    index: 10,
    desc: 'Alex default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '1:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '4:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '6:30 PM',
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
];

validateVillagerLevelSchedules(alex);
export default alex;
