import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const alexSpring: Schedule[] = [
  {
    villager: 'alex',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Alex spring rainy day',
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
    season: 'spring',
    index: 1,
    desc: 'Alex spring Wednesday Haley time <3',
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
    season: 'spring',
    index: 2,
    desc: 'Alex spring default',
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
];

validateSeasonalLevelSchedules(alexSpring);
export default alexSpring;
