import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const pennySpring: Schedule[] = [
  {
    villager: 'penny',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Penny spring 9 and 23 fallback to default',
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
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Penny spring 9 and 23 usual',
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
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Penny spring rainy day coin flip',
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
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Penny spring Tuesday Wednesday Friday',
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
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'Penny spring Saturday',
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
    type: 'seasonal',
    season: 'spring',
    index: 5,
    desc: 'Penny spring default',
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

validateSeasonalLevelSchedules(pennySpring);
export default pennySpring;
