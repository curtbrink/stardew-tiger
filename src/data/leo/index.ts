import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const leo: Schedule[] = [
  {
    villager: 'leo',
    index: 0,
    desc: 'Leo on the island, rainy day',
    conditions: [
      {
        type: 'flag',
        flagName: 'leoMoved',
        flagCheck: 'eq',
        flagValue: false,
      },
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On Ginger Island, in his house',
      },
      {
        time: '11:00 AM',
        desc: 'On Ginger Island, outside his house',
      },
      {
        time: '2:00 PM',
        desc: 'On Ginger Island, in his house',
      },
      {
        time: '9:00 PM',
        desc: 'On Ginger Island, in his house, in bed',
      },
    ],
  },
  {
    villager: 'leo',
    index: 1,
    desc: 'Leo on the island, Tuesday',
    conditions: [
      {
        type: 'flag',
        flagName: 'leoMoved',
        flagCheck: 'eq',
        flagValue: false,
      },
      {
        type: 'dayOfWeek',
        dayOfWeek: 1,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On Ginger Island, in his house',
      },
      {
        time: '10:30 AM',
        desc: 'On Ginger Island, at the south beach',
      },
      {
        time: '1:30 PM',
        desc: 'On Ginger Island, in the jungle',
      },
      {
        time: '5:00 PM',
        desc: 'On Ginger Island, at the Island Trader',
      },
      {
        time: '8:00 PM',
        desc: 'On Ginger Island, in his house, in bed',
      },
    ],
  },
  {
    villager: 'leo',
    index: 2,
    desc: 'Leo on the island, Sunday',
    conditions: [
      {
        type: 'flag',
        flagName: 'leoMoved',
        flagCheck: 'eq',
        flagValue: false,
      },
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On Ginger Island, in his house',
      },
      {
        time: '9:30 AM',
        desc: 'On Ginger Island, at the shrine',
      },
      {
        time: '2:00 PM',
        desc: 'On Ginger Island, outside his house',
      },
      {
        time: '5:00 PM',
        desc: 'On Ginger Island, in his house',
      },
      {
        time: '9:00 PM',
        desc: 'On Ginger Island, in his house, in bed',
      },
    ],
  },
  {
    villager: 'leo',
    index: 3,
    desc: 'Leo on the island default',
    conditions: [
      {
        type: 'flag',
        flagName: 'leoMoved',
        flagCheck: 'eq',
        flagValue: false,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On Ginger Island, in his house',
      },
      {
        time: '10:30 AM',
        desc: 'On Ginger Island, outside his house',
      },
      {
        time: '12:00 PM',
        desc: 'On Ginger Island, near the parrot perch',
      },
      {
        time: '3:00 PM',
        desc: 'On Ginger Island, outside the volcano',
      },
      {
        time: '8:00 PM',
        desc: 'On Ginger Island, in his house, in bed',
      },
    ],
  },
  {
    villager: 'leo',
    index: 4,
    desc: 'Leo mainland winter 15',
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
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: "Outside Linus's tent",
      },
      {
        time: '4:00 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leo',
    index: 5,
    desc: 'Leo 9th and 23rd always fallback to spring (bug?)',
    // this seems really weird, almost like the NOT check
    // results in a GOTO spring no matter if it passes or fails
    conditions: [
      {
        type: 'date',
        date: [9, 23],
      },
    ],
    goto: 14,
  },
  {
    villager: 'leo',
    index: 6,
    desc: 'Leo mainland rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: "In Linus's tent",
      },
      {
        time: '3:00 PM',
        desc: 'Outside his house',
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
    villager: 'leo',
    index: 7,
    desc: 'Leo mainland Tuesday Wednesday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [1, 2],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
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
        desc: 'Outside his house',
      },
      {
        time: '8:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leo',
    index: 8,
    desc: 'Leo mainland Saturday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 5,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '9:40 AM',
        desc: "Outside Haley and Emily's house",
      },
      {
        time: '12:00 PM',
        desc: 'At the town playground',
      },
      {
        time: '5:00 PM',
        desc: 'Outside his house',
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
    villager: 'leo',
    index: 9,
    desc: 'Leo mainland visiting the island on Sunday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On Ginger Island, in his house',
      },
      {
        time: '10:30 AM',
        desc: 'On Ginger Island, on the south beach',
      },
      {
        time: '1:30 PM',
        desc: 'On Ginger Island, outside his house',
      },
      {
        time: '5:00 PM',
        desc: 'On Ginger Island, at the Island Trader',
      },
      {
        time: '8:00 PM',
        desc: 'On Ginger Island, in his house, in bed',
      },
    ],
  },
  {
    villager: 'leo',
    index: 10,
    desc: 'Leo mainland visiting the island on Monday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On Ginger Island, in his house',
      },
      {
        time: '9:30 AM',
        desc: 'On Ginger Island, near the parrot perch',
      },
      {
        time: '2:00 PM',
        desc: 'On Ginger Island, outside his house',
      },
      {
        time: '5:00 PM',
        desc: 'On Ginger Island, in his house',
      },
      {
        time: '9:00 PM',
        desc: 'On Ginger Island, in his house, in bed',
      },
    ],
  },
  {
    villager: 'leo',
    index: 11,
    desc: 'Leo mainland summer default',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '6:30 AM',
        desc: 'Outside his house',
      },
      {
        time: '9:40 AM',
        desc: 'At the mountain lake',
      },
      {
        time: '4:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '8:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leo',
    index: 12,
    desc: 'Leo mainland fall default',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '7:40 AM',
        desc: 'Outside his house',
      },
      {
        time: '9:00 AM',
        desc: 'Outside the Community Center',
      },
      {
        time: '2:00 PM',
        desc: 'At the mountain lake',
      },
      {
        time: '8:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leo',
    index: 13,
    desc: 'Leo mainland winter default',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '2:00 PM',
        desc: 'At the Museum',
      },
      {
        time: '8:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leo',
    index: 14,
    desc: 'Leo mainland default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '7:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '9:30 AM',
        desc: 'At the mountain lake',
      },
      {
        time: '2:00 PM',
        desc: 'Outside his house',
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
];

validateVillagerLevelSchedules(leo);
export default leo;
