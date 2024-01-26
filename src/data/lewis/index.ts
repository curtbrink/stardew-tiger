import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const lewis: Schedule[] = [
  {
    villager: 'lewis',
    index: 0,
    desc: 'Mayor fall 9',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
      {
        type: 'date',
        date: 9,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:30 AM',
        desc: 'Home',
      },
      {
        time: '9:00 AM',
        desc: "At Marnie's Ranch",
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
        desc: "At Marnie's Ranch",
      },
      {
        time: '9:00 PM',
        desc: "At Marnie's Ranch, in bed",
      },
    ],
  },
  {
    villager: 'lewis',
    index: 1,
    desc: 'Mayor winter 16',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
      {
        type: 'date',
        date: 16,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '11:40 AM',
        desc: 'In the town square',
      },
      {
        time: '4:20 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'lewis',
    index: 2,
    desc: 'Mayor monthly 6th and 20th',
    conditions: [
      {
        type: 'date',
        date: [6, 20],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: 'At the Blacksmith',
      },
      {
        time: '1:00 PM',
        desc: 'At the Museum',
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'lewis',
    index: 3,
    desc: 'Mayor monthly 3rd and 24th',
    conditions: [
      {
        type: 'date',
        date: [3, 24],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: "At Marnie's Ranch",
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'lewis',
    index: 4,
    desc: 'Mayor monthly 1st',
    conditions: [
      {
        type: 'date',
        date: 1,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: 'At the Fish Shop',
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'lewis',
    index: 5,
    desc: 'Mayor monthly 15th',
    conditions: [
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
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: "At the Carpenter's Shop",
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'lewis',
    index: 6,
    desc: 'Mayor rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '2:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '7:50 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'lewis',
    index: 7,
    desc: 'Mayor winter Sundays',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
      },
    ],
    // this one seems like a bug. the source schedule references the Library map
    // which doesn't exist (the museum is named Archaeology something-or-other)
    // so looks like he just stays home all day
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'lewis',
    index: 8,
    desc: 'Mayor fall Sundays',
    conditions: [
      {
        type: 'season',
        season: 'fall',
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
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '9:30 AM',
        desc: 'Outside his house',
      },
      {
        time: '11:10 AM',
        desc: "Outside Leah's house",
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'lewis',
    index: 9,
    desc: 'Mayor summer Sundays',
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
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '11:40 AM',
        desc: 'At the beach, on the pier',
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'lewis',
    index: 10,
    desc: 'Mayor Tuesday default',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 1,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '11:40 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'lewis',
    index: 11,
    desc: 'Mayor Friday default',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 4,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '11:40 AM',
        desc: 'In the town square',
      },
      {
        time: '2:00 PM',
        desc: 'At the Community Center fountain',
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
    villager: 'lewis',
    index: 12,
    desc: 'Mayor default with Community Center',
    conditions: [
      {
        type: 'flag',
        flagName: 'communityCenterRestored',
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
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '9:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '10:40 AM',
        desc: 'At the Community Center',
      },
      {
        time: '6:30 PM',
        desc: 'Home',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'lewis',
    index: 13,
    desc: 'Mayor default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '11:40 AM',
        desc: 'In the town square',
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(lewis);
export default lewis;
