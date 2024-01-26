import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const penny: Schedule[] = [
  {
    villager: 'penny',
    index: 0,
    desc: 'Penny married but still working',
    isMarriage: true,
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [1, 2, 4],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On the farm',
      },
      {
        time: '8:30 AM',
        desc: 'At the Museum',
      },
      {
        time: '2:00 PM',
        desc: 'South of the ice cream stand',
      },
      {
        time: '4:20 PM',
        desc: "Outside Jodi's house",
      },
      {
        time: '5:50 PM',
        desc: "Outside Marnie's Ranch",
      },
      {
        time: '6:30 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'penny',
    index: 1,
    desc: 'Penny married Monday',
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
        time: '11:30 AM',
        desc: 'Near the town graveyard',
      },
      {
        time: '4:00 PM',
        desc: 'Outside the Saloon',
      },
      {
        time: '6:10 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'penny',
    index: 2,
    desc: 'Penny winter 15',
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
        time: '11:00 AM',
        desc: 'Home',
      },
      {
        time: '4:00 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:50 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'penny',
    index: 3,
    desc: 'Penny winter 4',
    conditions: [
      {
        type: 'season',
        season: 'winter',
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
        time: '9:00 AM',
        desc: 'Home',
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
        desc: 'On the JojaMart bridge',
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
    villager: 'penny',
    index: 4,
    desc: 'Penny 9 and 23 fallback to default',
    conditions: [
      {
        type: 'date',
        date: [9, 23],
      },
      {
        type: 'flag',
        flagName: 'pennyRelationship',
        flagCheck: 'gte',
        flagValue: 6,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: 'Near the town graveyard',
      },
      {
        time: '12:30 PM',
        desc: 'Home',
      },
      {
        time: '4:00 PM',
        desc: 'Outside the Saloon',
      },
      {
        time: '6:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'penny',
    index: 5,
    desc: 'Penny 9 and 23 usual',
    conditions: [
      {
        type: 'date',
        date: [9, 23],
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
        desc: 'Home, in her room',
      },
      {
        time: '11:00 AM',
        desc: 'On the bridge near the Museum',
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '6:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'penny',
    index: 6,
    desc: 'Penny rainy day coin flip',
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
        time: '8:10 AM',
        desc: 'Either at home in her room or outside the Museum',
      },
      {
        time: '11:00 AM',
        desc: 'Either at home or outside the Museum',
      },
      {
        time: '12:00 PM',
        desc: 'Either at home or in the Museum',
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '6:00 PM',
        desc: 'Home, either in her room or not',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'penny',
    index: 7,
    desc: 'Penny Tuesday Wednesday Friday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [1, 2, 4],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 AM',
        desc: 'At the Museum',
      },
      {
        time: '2:00 PM',
        desc: 'South of the ice cream stand',
      },
      {
        time: '4:20 PM',
        desc: "Outside Jodi's house",
      },
      {
        time: '5:50 PM',
        desc: "Outside Marnie's Ranch",
      },
      {
        time: '6:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'penny',
    index: 8,
    desc: 'Penny Saturday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 5,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '10:00 AM',
        desc: 'Near the town graveyard',
      },
      {
        time: '12:00 PM',
        desc: 'At the town playground',
      },
      {
        time: '5:00 PM',
        desc: "Outside Emily and Haley's house",
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'penny',
    index: 9,
    desc: 'Penny summer default',
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
        time: '8:00 AM',
        desc: 'Outside JojaMart',
      },
      {
        time: '1:00 PM',
        desc: 'Outside the Community Center',
      },
      {
        time: '6:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'penny',
    index: 10,
    desc: 'Penny winter default',
    conditions: [
      {
        type: 'season',
        season: 'winter',
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
        time: '9:00 AM',
        desc: 'Home',
      },
      {
        time: '10:30 AM',
        desc: 'At the Community Center',
      },
      {
        time: '6:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'penny',
    index: 11,
    desc: 'Penny default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 AM',
        desc: 'Near the town graveyard',
      },
      {
        time: '12:30 PM',
        desc: 'Home',
      },
      {
        time: '4:00 PM',
        desc: 'Outside the Saloon',
      },
      {
        time: '6:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(penny);
export default penny;
