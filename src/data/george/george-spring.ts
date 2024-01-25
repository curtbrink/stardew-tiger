import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const georgeSpring: Schedule[] = [
  {
    villager: 'george',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'George spring 23',
    conditions: [
      {
        type: 'date',
        date: 23,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '6:30 AM',
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
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'george',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'George spring rainy day',
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
        time: '6:30 AM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'george',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'George spring Sunday gridball',
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
        time: '6:30 AM',
        desc: 'Home',
      },
      {
        time: '11:00 AM',
        desc: 'At the Saloon',
      },
      {
        time: '3:00 PM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'george',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'George spring Sunday no gridball :(',
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
        time: '6:30 AM',
        desc: 'Home',
      },
      {
        time: '10:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '2:00 PM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'george',
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'George spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '6:30 AM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(georgeSpring);
export default georgeSpring;
