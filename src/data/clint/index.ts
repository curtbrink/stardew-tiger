import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const clint: Schedule[] = [
  {
    villager: 'clint',
    index: 0,
    desc: 'Clint winter 16',
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
        time: '9:00 AM',
        desc: 'Home, working',
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
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'clint',
    index: 1,
    desc: 'Clint winter 15',
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
        time: '8:50 AM',
        desc: 'Home, working',
      },
      {
        time: '5:00 PM',
        desc: 'At the Night Market',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'clint',
    index: 2,
    desc: 'Clint Friday at the Community Center',
    conditions: [
      {
        type: 'weather',
        weather: 'sun',
      },
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
        desc: 'Home, in his room',
      },
      {
        time: '8:50 AM',
        desc: 'At the Community Center',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'clint',
    index: 3,
    desc: 'Clint default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '9:00 AM',
        desc: 'Home, working',
      },
      {
        time: '5:00 PM',
        desc: 'Home',
      },
      {
        time: '7:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '12:00 AM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(clint);
export default clint;
