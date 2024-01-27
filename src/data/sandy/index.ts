import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const sandy: Schedule[] = [
  // I lied about Pierre earlier, Sandy is the new record for simplicity
  {
    villager: 'sandy',
    index: 0,
    desc: 'Sandy birthday wandering',
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
        desc: 'At the Oasis',
      },
      {
        time: '1:00 PM',
        desc: 'In the Calico Desert',
      },
      {
        time: '12:10 AM',
        desc: 'At the Oasis',
      },
    ],
  },
  {
    villager: 'sandy',
    index: 1,
    desc: 'Sandy default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'At the Oasis',
      },
    ],
  },
];

validateVillagerLevelSchedules(sandy);
export default sandy;
