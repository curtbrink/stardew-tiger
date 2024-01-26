import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const leah: Schedule[] = [
  {
    villager: 'leah',
    index: 0,
    desc: 'Leah married Monday',
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
        desc: 'Outside her house',
      },
      {
        time: '5:30 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    index: 1,
    desc: 'Leah annual physical spring 16',
    conditions: [
      {
        type: 'season',
        season: 'spring',
      },
      {
        type: 'date',
        date: 16,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
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
        time: '11:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    index: 2,
    desc: 'Leah winter 15',
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
        time: '4:00 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    index: 3,
    desc: 'Leah rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    goto: 4,
  },
  {
    villager: 'leah',
    index: 4,
    desc: 'Leah Friday Saturday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [4, 5],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '4:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:40 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    index: 5,
    desc: 'Leah Monday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '5:00 PM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    index: 6,
    desc: 'Leah winter default',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
    ],
    goto: 4,
  },
  {
    villager: 'leah',
    index: 7,
    desc: 'Leah fall default',
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
        time: '12:00 PM',
        desc: 'Outside the Blacksmith',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    index: 8,
    desc: 'Leah summer default',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
      {
        type: 'flag',
        flagName: 'beachBridgeRepaired',
        flagCheck: 'eq',
        flagValue: true,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '12:00 PM',
        desc: 'At the beach tidal pools',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    index: 9,
    desc: 'Leah summer no bridge fallback',
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
        time: '12:00 PM',
        desc: 'At the beach',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'leah',
    index: 10,
    desc: 'Leah default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '12:00 PM',
        desc: 'Outside her house',
      },
      {
        time: '3:00 PM',
        desc: 'At the forest pond',
      },
      {
        time: '7:30 PM',
        desc: 'Home',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(leah);
export default leah;
