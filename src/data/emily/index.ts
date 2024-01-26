import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const emily: Schedule[] = [
  {
    villager: 'emily',
    index: 0,
    desc: 'Emily married fall 15 visiting Sandy',
    isMarriage: true,
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
      {
        type: 'date',
        date: 15,
      },
      {
        type: 'flag',
        flagName: 'busServiceRestored',
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
        time: '10:30 AM',
        desc: 'At the Oasis',
      },
      {
        time: '1:00 PM',
        desc: 'In the Calico Desert',
      },
      {
        time: '12:00 AM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'emily',
    index: 1,
    desc: 'Emily married fall 15 fallback on marriage monday schedule even when raining?',
    isMarriage: true,
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
      {
        type: 'date',
        date: 15,
      },
    ],
    goto: 2,
  },
  {
    villager: 'emily',
    index: 2,
    desc: 'Emily married Monday',
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
        time: '8:30 AM',
        desc: "At Haley's house",
      },
      {
        time: '11:00 AM',
        desc: 'Outside the Community Center',
      },
      {
        time: '3:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'emily',
    index: 3,
    desc: 'Emily married Friday',
    isMarriage: true,
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
        desc: "On the pier near Willy's",
      },
      {
        time: '1:00 PM',
        desc: "At Pierre's General Store",
      },
      {
        time: '3:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'emily',
    index: 4,
    desc: 'Emily winter 15',
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
        desc: 'Home, in her room',
      },
      {
        time: '12:00 PM',
        desc: 'Home',
      },
      {
        time: '2:30 PM',
        desc: 'At the Night Market',
      },
      {
        time: '12:30 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'emily',
    index: 5,
    desc: 'Emily winter 11',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
      {
        type: 'date',
        date: 11,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
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
        desc: 'At the Saloon',
      },
      {
        time: '12:30 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'emily',
    index: 6,
    desc: 'Emily fall 15',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
      {
        type: 'date',
        date: 15,
      },
      {
        type: 'flag',
        flagName: 'busServiceRestored',
        flagCheck: 'eq',
        flagValue: true,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '10:30 AM',
        desc: 'At the Oasis',
      },
      {
        time: '1:00 PM',
        desc: 'In the Calico Desert',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'emily',
    index: 7,
    desc: 'Emily rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    goto: 10, // takes priority over tuesday friday
  },
  {
    villager: 'emily',
    index: 8,
    desc: 'Emily Tuesday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 1,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '10:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '4:00 PM',
        desc: 'At the Saloon, working',
      },
      {
        time: '12:30 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'emily',
    index: 9,
    desc: 'Emily spring Friday at the Community Center',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 4,
      },
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
        desc: 'Home, in her room',
      },
      {
        time: '10:00 AM',
        desc: 'At the Community Center',
      },
      {
        time: '3:30 PM',
        desc: 'At the Saloon, working',
      },
      {
        time: '12:30 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'emily',
    index: 10,
    desc: 'Emily default',
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
        time: '3:30 PM',
        desc: 'At the Saloon, working',
      },
      {
        time: '12:30 AM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(emily);
export default emily;
