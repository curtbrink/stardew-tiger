import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const abigailSpring: Schedule[] = [
  {
    villager: 'abigail',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Abigail annual physical spring 4',
    conditions: [
      {
        type: 'date',
        date: 4,
      }
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '12:30 PM',
        desc: 'At the clinic, waiting',
      },
      {
        time: '1:30 PM',
        desc: 'At the clinic, in the exam room',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Abigail spring Wednesday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 2,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '10:00 AM',
        desc: 'At the Museum',
      },
      {
        time: '6:00 PM',
        desc: 'At the town graveyard',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Abigail spring Friday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 4,
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
        time: '11:00 AM',
        desc: 'At Pierre\'s General Store',
      },
      {
        time: '3:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed'
      },
    ],
  },
  {
    villager: 'abigail',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Abigail spring Sunday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 6,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '10:30 AM',
        desc: 'Home, in Caroline and Pierre\'s room',
      },
      {
        time: '1:00 PM',
        desc: 'Outside the Wizard\'s Tower',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'abigail',
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'Abigail spring default',
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
        time: '10:30 AM',
        desc: 'At Pierre\'s General Store',
      },
      {
        time: '1:00 PM',
        desc: 'On the JojaMart bridge',
      },
      {
        time: '4:30 PM',
        desc: 'Home, in her room',
      },
      {
        time: '7:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateSeasonalLevelSchedules(abigailSpring);
export default abigailSpring;
