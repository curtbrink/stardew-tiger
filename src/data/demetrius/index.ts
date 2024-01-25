import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const demetrius: Schedule[] = [
  {
    villager: 'demetrius',
    index: 0,
    desc: 'Demetrius summer 25',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
      {
        type: 'date',
        date: 25,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:20 AM',
        desc: 'At the clinic, waiting',
      },
      {
        time: '1:30 PM',
        desc: 'At the clinic, in the exam room',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'demetrius',
    index: 1,
    desc: 'Demetrius winter 16',
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
        time: '7:50 AM',
        desc: 'Home',
      },
      {
        time: '3:40 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'demetrius',
    index: 2,
    desc: 'Demetrius rainy day',
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
        time: '7:50 AM',
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
    ],
  },
  {
    villager: 'demetrius',
    index: 3,
    desc: 'Demetrius Friday',
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
        time: '7:50 AM',
        desc: 'Home',
      },
      {
        time: '4:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'demetrius',
    index: 4,
    desc: 'Demetrius winter default',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
    ],
    goto: 2, // same as rain
  },
  {
    villager: 'demetrius',
    index: 5,
    desc: 'Demetrius fall default',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:50 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: 'At the mountain lake',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'demetrius',
    index: 6,
    desc: 'Demetrius summer default',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:50 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: 'At the Community Center fountain',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'demetrius',
    index: 7,
    desc: 'Demetrius default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:50 AM',
        desc: 'Home',
      },
      {
        time: '2:30 PM',
        desc: 'Outside his house',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(demetrius);
export default demetrius;
