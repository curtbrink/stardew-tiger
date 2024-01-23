import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const harveySpring: Schedule[] = [
  {
    villager: 'harvey',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Harvey spring rainy day',
    conditions: [{
      type: 'weather',
      weather: 'rain',
    }],
    steps: [
      {
        time: '6:00 AM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '8:40 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '12:00 PM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '5:30 PM',
        desc: 'At the Saloon',
      },
      {
        time: '10:00 PM',
        desc: 'At the clinic, in bed',
      },
    ],
  },
  {
    villager: 'harvey',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Harvey spring Tuesday',
    conditions: [{
      type: 'dayOfWeek',
      dayOfWeek: 1,
    }],
    steps: [
      {
        time: '6:00 AM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '7:30 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '6:00 PM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '11:00 PM',
        desc: 'At the clinic, in bed'
      }
    ],
  },
  {
    villager: 'harvey',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Harvey spring Thursday',
    conditions: [{
      type: 'dayOfWeek',
      dayOfWeek: 3,
    }],
    steps: [
      {
        time: '6:00 AM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '7:30 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '6:00 PM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '11:00 PM',
        desc: 'At the clinic, in bed'
      }
    ],
  },
  {
    villager: 'harvey',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Harvey spring Friday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 4,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '8:30 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '12:00 PM',
        desc: 'At Pierre\'s General Store',
      },
      {
        time: '3:00 PM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'At the clinic, in bed',
      }
    ],
  },
  {
    villager: 'harvey',
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'Harvey spring Saturday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 5,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '8:30 AM',
        desc: 'At the Museum',
      },
      {
        time: '3:00 PM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'At the clinic, in bed',
      },
    ],
  },
  {
    villager: 'harvey',
    type: 'seasonal',
    season: 'spring',
    index: 5,
    desc: 'Harvey spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '8:30 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '12:00 PM',
        desc: 'In the town square park',
      },
      {
        time: '5:30 PM',
        desc: 'At the clinic, working',
      },
      {
        time: '6:40 PM',
        desc: 'At the clinic, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'At the clinic, in bed',
      },
    ],
  },
];

validateSeasonalLevelSchedules(harveySpring);
export default harveySpring;
