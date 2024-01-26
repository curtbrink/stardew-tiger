import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const elliott: Schedule[] = [
  {
    villager: 'elliott',
    index: 0,
    desc: 'Elliott married Monday',
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
        desc: 'At the beach',
      },
      {
        time: '5:00 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'elliott',
    index: 1,
    desc: 'Elliott winter 17',
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
        desc: 'Home',
      },
      {
        time: '11:30 AM',
        desc: 'At the Museum',
      },
      {
        time: '4:50 PM',
        desc: 'At the Night Market',
      },
      {
        time: '1:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'elliott',
    index: 2,
    desc: 'Elliott summer 9',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
      {
        type: 'date',
        date: 9,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
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
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'elliott',
    index: 3,
    desc: 'Elliott rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'elliott',
    index: 4,
    desc: 'Elliott Thursday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 3,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '11:30 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '5:30 PM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'elliott',
    index: 5,
    desc: 'Elliott Friday/Sunday Leah time <3',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [4, 6],
      },
      {
        type: 'flag',
        flagName: 'leahRelationship',
        flagCheck: 'lt',
        flagValue: 6,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '12:00 PM',
        desc: 'At the beach, on the pier',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'elliott',
    index: 6,
    desc: 'Elliott Friday/Sunday fallback on spring',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [4, 6],
      },
    ],
    goto: 9,
  },
  {
    villager: 'elliott',
    index: 7,
    desc: 'Elliott winter and fall default',
    conditions: [
      {
        type: 'season',
        season: ['winter', 'fall'],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '11:30 AM',
        desc: 'At the Museum',
      },
      {
        time: '5:30 PM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'elliott',
    index: 8,
    desc: 'Elliott summer default',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '11:30 AM',
        desc: "Outside Leah's house",
      },
      {
        time: '6:00 PM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'elliott',
    index: 9,
    desc: 'Elliott default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '12:00 PM',
        desc: 'At the beach',
      },
      {
        time: '1:30 PM',
        desc: 'Home',
      },
      {
        time: '3:00 PM',
        desc: 'On the bridge leading to the beach',
      },
      {
        time: '6:00 PM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(elliott);
export default elliott;
