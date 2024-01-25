import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const jasSpring: Schedule[] = [
  {
    villager: 'jas',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Jas spring 9 and 23 fallback to default',
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
        desc: 'Home, in her room',
      },
      {
        time: '11:00 AM',
        desc: 'At the forest pond',
      },
      {
        time: '3:00 PM',
        desc: "At Marnie's Ranch",
      },
      {
        time: '7:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jas',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Jas spring rainy day',
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
        time: '11:00 AM',
        desc: "At Marnie's Ranch",
      },
      {
        time: '7:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jas',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Jas spring Tuesday Wednesday Friday',
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
        desc: 'Outside the Museum',
      },
      {
        time: '4:20 PM',
        desc: "Outside Emily and Haley's house",
      },
      {
        time: '5:50 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jas',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Jas spring Saturday',
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
    villager: 'jas',
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'Jas spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '11:00 AM',
        desc: 'At the forest pond',
      },
      {
        time: '3:00 PM',
        desc: "At Marnie's Ranch",
      },
      {
        time: '7:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(jasSpring);
export default jasSpring;
