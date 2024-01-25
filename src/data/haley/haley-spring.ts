import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const haleySpring: Schedule[] = [
  {
    villager: 'haley',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Haley spring rainy day',
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
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Haley spring Monday',
    conditions: [
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
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Haley spring Wednesday Alex time <3',
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
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Haley spring default',
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

validateVillagerLevelSchedules(haleySpring);
export default haleySpring;
