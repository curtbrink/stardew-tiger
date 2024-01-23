import { Schedule } from '@/data/types';

const alexSummer: Schedule[] = [
  {
    villager: 'alex',
    type: 'seasonal',
    season: 'summer',
    index: 0,
    desc: 'Alex clinic day',
    conditions: [{
      type: 'date',
      date: 16,
    }],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Outside his house'
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
        desc: 'Home, in his room',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ]
  },
  {
    villager: 'alex',
    type: 'seasonal',
    season: 'summer',
    index: 1,
    desc: 'Alex summer rainy day',
    conditions: [{
      type: 'weather',
      weather: 'rain',
    }],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Home'
      },
      {
        time: '1:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '4:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '6:30 PM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ]
  },
  {
    villager: 'alex',
    type: 'seasonal',
    season: 'summer',
    index: 2,
    desc: 'Alex summer Wednesday Haley time <3',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 2,
      },
      {
        type: 'flag',
        flagName: 'haleyRelationship',
        flagCheck: 'lt',
        flagValue: 6,
      }
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Outside his house'
      },
      {
        time: '12:00 PM',
        desc: 'At Haley and Emily\'s House',
      },
      {
        time: '4:30 PM',
        desc: 'Outside his house',
      },
      {
        time: '6:40 PM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ]
  },
  {
    villager: 'alex',
    type: 'seasonal',
    season: 'summer',
    index: 3,
    desc: 'Alex summer default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:50 AM',
        desc: 'At the beach'
      },
      {
        time: '12:00 PM',
        desc: 'Working the ice cream stand',
      },
      {
        time: '5:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ]
  },
];
export default alexSummer;
