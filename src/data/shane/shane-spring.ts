import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

// shane is fucking throwing wrenches into this and it was hard to wrap my head around the logic for some reason
// shane attempts to work M-F or if it's Sat/Sun and raining
// otherwise saturday schedule or sunday schedule
// with a fallback if community center is restored

// test for schedule A ("sat"):
// -> is it saturday, and is it sunny?
// test for schedule B ("sun"):
// -> is it sunday, and is it sunny?
// test for work day schedule ("spring"):
// -> we know it's either raining, or it's M-F. so is the community center restored?

const shaneSpring: Schedule[] = [
  {
    villager: 'shane',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Shane spring Saturday no rain',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 5,
      },
      {
        type: 'weather',
        weather: 'sun',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:00 AM',
        desc: 'Home',
      },
      {
        time: '12:00 PM',
        desc: 'At Pierre\'s General Store',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'shane',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Shane spring Sunday no rain',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
      },
      {
        type: 'weather',
        weather: 'sun',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:00 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '2:50 PM',
        desc: 'Home',
      },
      {
        time: '6:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'shane',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Shane spring JojaMart work day',
    conditions: [
      {
        type: 'flag',
        flagName: 'communityCenterRestored',
        flagCheck: 'eq',
        flagValue: false,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:00 AM',
        desc: 'At JojaMart, working',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'shane',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Shane spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '9:00 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '12:00 PM',
        desc: 'Home',
      },
      {
        time: '2:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed'
      },
    ],
  },
];

validateSeasonalLevelSchedules(shaneSpring);
export default shaneSpring;
