import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const willy: Schedule[] = [
  {
    villager: 'willy',
    index: 0,
    desc: 'Willy clinic appointment spring 9',
    conditions: [
      {
        type: 'season',
        season: 'spring',
      },
      {
        type: 'date',
        date: 9,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '6:10 AM',
        desc: 'At the beach, on the pier',
      },
      {
        time: '8:50 AM',
        desc: 'Home',
      },
      {
        time: '10:10 AM',
        desc: 'At the clinic, waiting',
      },
      {
        time: '1:30 PM',
        desc: 'At the clinic, in the exam room',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:20 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'willy',
    index: 1,
    desc: 'Willy Night Market',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
      {
        type: 'date',
        date: [15, 16, 17],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '4:30 PM',
        desc: 'At the Saloon',
      },
      {
        time: '12:20 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'willy',
    index: 2,
    desc: 'Willy rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    goto: 5,
  },
  {
    villager: 'willy',
    index: 3,
    desc: 'Willy Friday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 4,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '6:10 AM',
        desc: 'At the beach, on the pier',
      },
      {
        time: '8:50 AM',
        desc: 'Home',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:20 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'willy',
    index: 4,
    desc: 'Willy Saturday',
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
        time: '6:10 AM',
        desc: "Outside Leah's house",
      },
      {
        time: '2:00 PM',
        desc: "Outside the Mayor's house",
      },
      {
        time: '7:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'willy',
    index: 5,
    desc: 'Willy winter default',
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
        time: '6:10 AM',
        desc: 'At the beach, on the pier',
      },
      {
        time: '8:50 AM',
        desc: 'Home',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:20 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'willy',
    index: 6,
    desc: 'Willy default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '6:10 AM',
        desc: 'At the beach, on the pier',
      },
      {
        time: '8:50 AM',
        desc: 'Home',
      },
      {
        time: '5:00 PM',
        desc: 'At the beach, on the pier',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(willy);
export default willy;
