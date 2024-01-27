import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const sebastian: Schedule[] = [
  {
    villager: 'sebastian',
    index: 0,
    desc: 'Sebastian married Monday',
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
        time: '9:00 AM',
        desc: 'At the mountain lake',
      },
      {
        time: '1:00 PM',
        desc: "At the Carpenter's Shop",
      },
      {
        time: '5:20 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'sebastian',
    index: 1,
    desc: 'Sebastian married Friday',
    isMarriage: true,
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 4,
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
        time: '8:30 AM',
        desc: 'At the beach, on the pier',
      },
      {
        time: '3:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '9:10 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'sebastian',
    index: 2,
    desc: 'Sebastian winter 16',
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
        desc: 'Home, in his room',
      },
      {
        time: '3:00 PM',
        desc: 'Home',
      },
      {
        time: '3:40 PM',
        desc: 'Home, in his room',
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
    villager: 'sebastian',
    index: 3,
    desc: 'Sebastian summer 4',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
      {
        type: 'date',
        date: 4,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '10:00 AM',
        desc: 'At the clinic, waiting',
      },
      {
        time: '1:30 PM',
        desc: 'At the clinic, in the exam room',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sebastian',
    index: 4,
    desc: 'Sebastian 11th and 25th fallback to spring default',
    conditions: [
      {
        type: 'date',
        date: [11, 25],
      },
      {
        type: 'flag',
        flagName: 'sebastianRelationship',
        flagCheck: 'gte',
        flagValue: 6,
      },
    ],
    goto: 11,
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '5:30 PM',
        desc: 'Home',
      },
      {
        time: '6:30 PM',
        desc: 'Home, in his room',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sebastian',
    index: 5,
    desc: 'Sebastian day 11 and 15 solitude',
    conditions: [
      {
        type: 'date',
        date: [11, 15],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '5:30 PM',
        desc: 'Home',
      },
      {
        time: '6:30 PM',
        desc: 'Home, in his room',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sebastian',
    index: 6,
    desc: 'Sebastian rainy day coin flip',
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
        time: '10:30 AM',
        desc: 'Either at home in his room, or at the end of the pier',
      },
      {
        time: '3:00 PM',
        desc: 'Either at the Saloon, or at the end of the pier',
      },
      {
        time: '5:00 PM',
        desc: 'Either at the Saloon, or at home',
      },
      {
        time: '7:40 PM',
        desc: 'Either at the Saloon, or at home in bed',
      },
      {
        time: '9:10 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sebastian',
    index: 7,
    desc: 'Sebastian Thursday train station',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 3,
      },
      {
        type: 'flag',
        flagName: 'railroadOpen',
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
        time: '2:00 PM',
        desc: 'At the train station',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sebastian',
    index: 8,
    desc: 'Sebastian Friday',
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
        time: '3:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '9:10 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sebastian',
    index: 9,
    desc: 'Sebastian Saturday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 5,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '9:00 AM',
        desc: "Outside Haley and Emily's house",
      },
      {
        time: '12:30 PM',
        desc: "At Sam's house in Sam's room",
      },
      {
        time: '6:00 PM',
        desc: "Outside Sam's house",
      },
      {
        time: '7:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sebastian',
    index: 10,
    desc: 'Sebastian fall default',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '12:00 PM',
        desc: 'At the mountain lake',
      },
      {
        time: '2:00 PM',
        desc: 'Outside the Mines',
      },
      {
        time: '3:00 PM',
        desc: 'At the mountain lake',
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '5:30 PM',
        desc: 'Home, in his room',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sebastian',
    index: 11,
    desc: 'Sebastian default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '3:00 PM',
        desc: 'Home',
      },
      {
        time: '3:30 PM',
        desc: 'Home, in his room',
      },
      {
        time: '6:30 PM',
        desc: 'At the mountain lake',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(sebastian);
export default sebastian;
