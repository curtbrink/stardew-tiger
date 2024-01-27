import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const sam: Schedule[] = [
  {
    villager: 'sam',
    index: 0,
    desc: 'Sam married Monday',
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
        time: '8:00 AM',
        desc: "At Jodi's house",
      },
      {
        time: '3:00 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 1,
    desc: 'Sam married Friday',
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
        desc: "At Jodi's house",
      },
      {
        time: '11:00 AM',
        desc: 'Outside the saloon',
      },
      {
        time: '3:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '9:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 2,
    desc: 'Sam winter 17',
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
        time: '5:00 PM',
        desc: 'At the Night Market',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 3,
    desc: 'Sam fall 11',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
      {
        type: 'date',
        date: 11,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
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
        desc: 'Outside his house',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 4,
    desc: 'Sam day 9 and 23 Penny time <3',
    conditions: [
      {
        type: 'date',
        date: [9, 23],
      },
      {
        type: 'flag',
        flagName: 'pennyRelationship',
        flagCheck: 'lt',
        flagValue: 6,
      },
      {
        type: 'flag',
        flagName: 'samRelationship',
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
        time: '11:00 AM',
        desc: 'On the bridge near the ice cream stand',
      },
      {
        time: '4:00 PM',
        desc: "Outside Emily and Haley's house",
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 5,
    desc: 'Sam rainy day coin flip',
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
        time: '11:00 AM',
        desc: 'Home, either in his room or not',
      },
      {
        time: '2:00 PM',
        desc: 'Either at the Saloon or home, in his room',
      },
      {
        time: '3:00 PM',
        desc: 'Either at the Saloon or home',
      },
      {
        time: '5:00 PM',
        desc: 'Either at the Saloon or home, in his room',
      },
      {
        time: '7:40 PM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 6,
    desc: 'Sam Monday Wednesday Museum job',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [0, 2],
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
        desc: 'Home, in his room',
      },
      {
        time: '11:00 AM',
        desc: 'At the Museum',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 7,
    desc: 'Sam Monday Wednesday JojaMart job',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [0, 2],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '11:00 AM',
        desc: 'At JojaMart, working',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 8,
    desc: 'Sam Friday',
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
        time: '11:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '3:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '9:20 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 9,
    desc: 'Sam Saturday',
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
        time: '8:00 AM',
        desc: "Outside Haley and Emily's house",
      },
      {
        time: '12:30 PM',
        desc: 'Home, in his room',
      },
      {
        time: '6:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '7:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 10,
    desc: 'Sam summer default',
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
        time: '1:40 PM',
        desc: 'At the beach',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 11,
    desc: 'Sam fall default',
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
        time: '1:20 PM',
        desc: "Outside Leah's house",
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 12,
    desc: 'Sam winter default',
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
        time: '1:20 PM',
        desc: 'At the Saloon',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    index: 13,
    desc: 'Sam default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '1:40 PM',
        desc: "Outside the Mayor's house",
      },
      {
        time: '6:30 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(sam);
export default sam;
