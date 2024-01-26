import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const abigail: Schedule[] = [
  {
    villager: 'abigail',
    index: 0,
    desc: 'Abigail married Monday',
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
        time: '8:30 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '1:00 PM',
        desc: 'At the town graveyard',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '8:30 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 1,
    desc: 'Abigail married Friday',
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
        time: '8:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '11:00 AM',
        desc: 'At the mountain lake',
      },
      {
        time: '3:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '8:30 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 2,
    desc: 'Abigail winter 15',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
      {
        type: 'date',
        date: 15,
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
        time: '10:30 AM',
        desc: "At the Carpenter's Shop",
      },
      {
        time: '2:30 PM',
        desc: 'At the Night Market',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 3,
    desc: 'Abigail annual physical spring 4',
    conditions: [
      {
        type: 'season',
        season: 'spring',
      },
      {
        type: 'date',
        date: 4,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '12:30 PM',
        desc: 'At the clinic, waiting',
      },
      {
        time: '1:30 PM',
        desc: 'At the clinic, in the exam room',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 4,
    desc: 'Abigail 11th and 25th fallback to default with 6 hearts',
    conditions: [
      {
        type: 'date',
        date: [11, 25],
      },
      {
        type: 'flag',
        flagName: 'abigailRelationship',
        flagCheck: 'gte',
        flagValue: 6,
      },
    ],
    goto: 17,
  },
  {
    villager: 'abigail',
    index: 5,
    desc: 'Abigail 11th and 25th Sebastian time',
    conditions: [
      {
        type: 'date',
        date: [11, 25],
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
        desc: 'Home, in her room',
      },
      {
        time: '10:00 AM',
        desc: "At Sebastian's house, in his room",
      },
      {
        time: '5:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 6,
    desc: 'Abigail 11th and 25th fallback to default',
    conditions: [
      {
        type: 'date',
        date: [11, 25],
      },
    ],
    goto: 17,
  },
  {
    villager: 'abigail',
    index: 7,
    desc: 'Abigail 6th and 16th flute time',
    conditions: [
      {
        type: 'date',
        date: [6, 16],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '3:00 PM',
        desc: 'At the mountain lake',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 8,
    desc: 'Abigail rainy day coin flip',
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
        time: '9:00 AM',
        desc: 'Home, either in her room or not',
      },
      {
        time: '11:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '2:00 PM',
        desc: "Either at Pierre's General Store or the Saloon",
      },
      {
        time: '3:00 PM',
        desc: 'Either at the Saloon or at home in her room',
      },
      {
        time: '8:00 PM',
        desc: 'Home, either in her room or in bed',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 9,
    desc: 'Abigail fall Monday',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '11:00 AM',
        desc: "On the pier near Willy's",
      },
      {
        time: '6:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 10,
    desc: 'Abigail Wednesday',
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
        time: '10:00 AM',
        desc: 'At the Museum',
      },
      {
        time: '6:00 PM',
        desc: 'At the town graveyard',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 11,
    desc: 'Abigail Friday',
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
        time: '9:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '3:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 12,
    desc: 'Abigail Sunday',
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
        time: '10:30 AM',
        desc: "Home, in Caroline and Pierre's room",
      },
      {
        time: '1:00 PM',
        desc: "Outside the Wizard's Tower",
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 13,
    desc: 'Abigail fall default',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '1:00 PM',
        desc: 'At the bus stop',
      },
      {
        time: '5:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '7:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 14,
    desc: 'Abigail winter default',
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
        desc: "At Pierre's General Store",
      },
      {
        time: '10:30 AM',
        desc: "At the Carpenter's Shop",
      },
      {
        time: '2:30 PM',
        desc: 'Home, in her room',
      },
      {
        time: '7:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 15,
    desc: 'Abigail summer no railroad default to spring',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
      {
        type: 'flag',
        flagName: 'railroadOpen',
        flagCheck: 'eq',
        flagValue: false,
      },
    ],
    goto: 17,
  },
  {
    villager: 'abigail',
    index: 16,
    desc: 'Abigail summer default',
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
        time: '9:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '10:30 AM',
        desc: 'At the train station',
      },
      {
        time: '2:00 PM',
        desc: 'At the mountain lake',
      },
      {
        time: '5:40 PM',
        desc: 'Home, in her room',
      },
      {
        time: '7:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    index: 17,
    desc: 'Abigail spring default',
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
        time: '10:30 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '1:00 PM',
        desc: 'On the JojaMart bridge',
      },
      {
        time: '4:30 PM',
        desc: 'Home, in her room',
      },
      {
        time: '7:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(abigail);
export default abigail;
