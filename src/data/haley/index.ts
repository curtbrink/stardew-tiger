import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const haley: Schedule[] = [
  {
    villager: 'haley',
    index: 0,
    desc: 'Haley married Monday',
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
        time: '9:30 AM',
        desc: "At Emily's house",
      },
      {
        time: '3:40 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'haley',
    index: 1,
    desc: 'Haley winter 9 annual physical',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
      {
        type: 'date',
        date: 9,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
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
        desc: 'Home, in her room',
      },
      {
        time: '10:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'haley',
    index: 2,
    desc: 'Haley winter 16',
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
        time: '12:00 PM',
        desc: 'Home',
      },
      {
        time: '4:30 PM',
        desc: 'At the Night Market',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'haley',
    index: 3,
    desc: 'Haley rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    goto: 7, // same as winter
  },
  {
    villager: 'haley',
    index: 4,
    desc: 'Haley spring and fall Monday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
      {
        type: 'season',
        season: ['spring', 'fall'],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '10:00 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: "Outside Marnie's Ranch",
      },
      {
        time: '4:30 PM',
        desc: 'Home',
      },
      {
        time: '8:20 PM',
        desc: 'Home, in her room',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'haley',
    index: 5,
    desc: 'Haley Wednesday Alex time <3',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 2,
      },
      {
        type: 'flag',
        flagName: 'alexRelationship',
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
        time: '12:00 PM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '10:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'haley',
    index: 6,
    desc: 'Haley summer default',
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
        time: '10:30 AM',
        desc: 'At the beach',
      },
      {
        time: '1:30 PM',
        desc: 'At the ice cream stand',
      },
      {
        time: '5:00 PM',
        desc: 'Home',
      },
      {
        time: '8:20 PM',
        desc: 'Home, in her room',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'haley',
    index: 7,
    desc: 'Haley winter default',
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
        time: '12:00 PM',
        desc: 'Home',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'haley',
    index: 8,
    desc: 'Haley default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '11:00 AM',
        desc: 'At the Community Center fountain',
      },
      {
        time: '4:30 PM',
        desc: 'Home',
      },
      {
        time: '8:20 PM',
        desc: 'Home, in her room',
      },
      {
        time: '10:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(haley);
export default haley;
