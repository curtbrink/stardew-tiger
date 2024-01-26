import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const pam: Schedule[] = [
  {
    villager: 'pam',
    index: 0,
    desc: 'Pam spring 25',
    conditions: [
      {
        type: 'season',
        season: 'spring',
      },
      {
        type: 'date',
        date: 25,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '11:30 AM',
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
    villager: 'pam',
    index: 1,
    desc: 'Pam bus service',
    conditions: [
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
        desc: 'Home',
      },
      {
        time: '8:30 AM',
        desc: 'At the bus stop',
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
    villager: 'pam',
    index: 2,
    desc: 'Pam no JojaMart',
    // technically I don't think this one is possible...
    // because if you have completed the community center, that implies
    // you've completed the vault and restored bus service, so the above
    // schedule for bus service will always apply.
    // meh, keeping this here for completeness. never know what future updates might change.
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
        desc: 'Home',
      },
      {
        time: '12:00 PM',
        desc: "At Pierre's General Store",
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
    villager: 'pam',
    index: 3,
    desc: 'Pam default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home',
      },
      {
        time: '12:00 PM',
        desc: 'At JojaMart',
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
];

validateVillagerLevelSchedules(pam);
export default pam;
