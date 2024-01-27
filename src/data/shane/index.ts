import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

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

// we'll see if this is still true now that I'm writing these basically translated directly from the source code.

const shane: Schedule[] = [
  {
    villager: 'shane',
    index: 0,
    desc: 'Shane married Monday',
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
        time: '9:30 AM',
        desc: "At Marnie's Ranch",
      },
      {
        time: '11:30 AM',
        desc: 'At the forest pond',
      },
      {
        time: '5:00 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'shane',
    index: 1,
    desc: 'Shane married Friday',
    isMarriage: true,
    // there's a "MAIL shanePK" step in here but
    // it seems like it only affects where he will
    // stand in the Saloon
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
        time: '8:30 AM',
        desc: 'Near the town sewer entrance',
      },
      {
        time: '1:00 PM',
        desc: "At Pierre's General Store",
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'shane',
    index: 2,
    desc: 'Shane married Sunday',
    isMarriage: true,
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
      },
      {
        type: 'weather',
        weather: 'sun',
      },
      {
        type: 'flag',
        flagName: 'saloonGridballRoom',
        flagCheck: 'eq',
        flagValue: true,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On the farm',
      },
      {
        time: '8:30 AM',
        desc: 'Near the town sewer entrance',
      },
      {
        time: '10:00 AM',
        desc: 'At the Saloon',
      },
      {
        time: '8:00 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'shane',
    index: 3,
    desc: 'Shane winter 15',
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
        time: '3:00 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  // ok now it gets hairy a little.
  // if (rain) {
  //   if (community center) {
  //     schedule default
  //   } else {
  //     schedule spring
  //   }
  // }
  // prob just use gotos here to make sure the logic is right
  {
    villager: 'shane',
    index: 4,
    desc: 'Shane rainy day no JojaMart',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
      {
        type: 'flag',
        flagName: 'communityCenterRestored',
        flagCheck: 'eq',
        flagValue: true,
      },
    ],
    goto: 11,
  },
  {
    villager: 'shane',
    index: 5,
    desc: 'Shane rainy day JojaMart',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    goto: 10,
  },
  {
    villager: 'shane',
    index: 6,
    desc: 'Shane summer Sundays',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
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
    index: 7,
    desc: 'Shane Saturdays',
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
        time: '7:00 AM',
        desc: 'Home',
      },
      {
        time: '12:00 PM',
        desc: "At Pierre's General Store",
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
    index: 8,
    desc: 'Shane Sundays gridball',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
      },
      {
        type: 'flag',
        flagName: 'saloonGridballRoom',
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
        time: '7:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
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
    index: 9,
    desc: 'Shane Sundays no gridball',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
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
    index: 10,
    desc: 'Shane JojaMart work day ("spring")',
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
    index: 11,
    desc: 'Shane default default (defaulted to "default" default)',
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
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(shane);
export default shane;
