import { Schedule } from '@/data/types';

const elliottSpring: Schedule[] = [
  {
    villager: 'elliott',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Elliott spring rainy day',
    conditions: [{
      type: 'weather',
      weather: 'rain',
    }],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
    ],
  },
  {
    villager: 'elliott',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Elliott spring Thursday',
    conditions: [{
      type: 'dayOfWeek',
      dayOfWeek: 3,
    }],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '11:30 AM',
        desc: 'At Pierre\'s General Store',
      },
      {
        time: '5:30 PM',
        desc: 'Home',
      },
    ],
  },
  {
    villager: 'elliott',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Elliott spring Friday Leah time <3',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 4,
      },
      {
        type: 'flag',
        flagName: 'leahRelationship',
        flagCheck: 'lt',
        flagValue: 6,
      }
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '12:00 PM',
        desc: 'On the pier near Willy\'s',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:40 PM',
        desc: 'Home',
      },
    ],
  },
  {
    villager: 'elliott',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Elliott spring Sunday Leah time <3',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
      },
      {
        type: 'flag',
        flagName: 'leahRelationship',
        flagCheck: 'lt',
        flagValue: 6,
      }
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '12:00 PM',
        desc: 'On the pier near Willy\'s',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:40 PM',
        desc: 'Home',
      },
    ],
  },
  {
    villager: 'elliott',
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'Elliott spring default',
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
    ],
  },
];
export default elliottSpring;
