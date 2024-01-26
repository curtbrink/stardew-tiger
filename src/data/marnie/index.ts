import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const marnie: Schedule[] = [
  {
    villager: 'marnie',
    index: 0,
    desc: 'Marnie winter 18',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
      {
        type: 'date',
        date: 18,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '10:40 AM',
        desc: 'At the clinic, waiting',
      },
      {
        time: '1:30 PM',
        desc: 'At the clinic, in the exam room',
      },
      {
        time: '4:10 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'marnie',
    index: 1,
    desc: 'Marnie winter 16',
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
        desc: 'Home, in her room',
      },
      {
        time: '8:50 AM',
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
    villager: 'marnie',
    index: 2,
    desc: 'Marnie fall 18',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
      {
        type: 'date',
        date: 18,
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
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'marnie',
    index: 3,
    desc: 'Marnie rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    goto: 7,
  },
  {
    villager: 'marnie',
    index: 4,
    desc: 'Marnie Tuesdays',
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
        time: '6:10 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'marnie',
    index: 5,
    desc: 'Marnie Mondays',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '8:10 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '12:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'marnie',
    index: 6,
    desc: 'Marnie Wednesday/Friday/Saturday/Sunday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [2, 4, 5, 6],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 AM',
        desc: 'Home',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in her room',
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
    villager: 'marnie',
    index: 7,
    desc: 'Marnie default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 AM',
        desc: 'Home',
      },
      {
        time: '6:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(marnie);
export default marnie;
