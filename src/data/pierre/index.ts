import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const pierre: Schedule[] = [
  // my man is out here with literally two schedules
  {
    villager: 'pierre',
    index: 0,
    desc: 'Pierre Friday',
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
        desc: 'Home, in his room',
      },
      {
        time: '7:00 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '10:50 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'pierre',
    index: 1,
    desc: 'Pierre default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:00 AM',
        desc: "At Pierre's General Store",
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
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(pierre);
export default pierre;
