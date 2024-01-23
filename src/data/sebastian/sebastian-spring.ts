import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const sebastianSpring: Schedule[] = [
  {
    villager: 'sebastian',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Sebastian spring day 11 solitude',
    conditions: [
      {
        type: 'date',
        date: 11,
      },
      {
        type: 'flag',
        flagName: 'sebastianRelationship',
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
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Sebastian spring day 15 solitude',
    conditions: [
      {
        type: 'date',
        date: 15,
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
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Sebastian spring day 11 slightly less solitude',
    conditions: [
      {
        type: 'date',
        date: 11,
      },
      {
        type: 'flag',
        flagName: 'sebastianRelationship',
        flagCheck: 'gte',
        flagValue: 6,
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
  {
    villager: 'sebastian',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Sebastian spring day 25 slightly less solitude',
    conditions: [
      {
        type: 'date',
        date: 25,
      },
      {
        type: 'flag',
        flagName: 'sebastianRelationship',
        flagCheck: 'gte',
        flagValue: 6,
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
  {
    villager: 'sebastian',
    type: 'seasonal',
    season: 'spring',
    index: 4,
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
        desc: 'Home, in bed'
      },
    ],
  },
  {
    villager: 'sebastian',
    type: 'seasonal',
    season: 'spring',
    index: 5,
    desc: 'Sebastian spring Thursday train station',
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
      }
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
    type: 'seasonal',
    season: 'spring',
    index: 6,
    desc: 'Sebastian spring Friday',
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
    type: 'seasonal',
    season: 'spring',
    index: 7,
    desc: 'Sebastian spring Saturday',
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
        desc: 'Outside Haley and Emily\'s house',
      },
      {
        time: '12:30 PM',
        desc: 'At Sam\'s house in Sam\'s room',
      },
      {
        time: '6:00 PM',
        desc: 'Outside Sam\'s house',
      },
      {
        time: '7:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sebastian',
    type: 'seasonal',
    season: 'spring',
    index: 8,
    desc: 'Sebastian spring default',
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

validateSeasonalLevelSchedules(sebastianSpring);
export default sebastianSpring;
