import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const jas: Schedule[] = [
  {
    villager: 'jas',
    index: 0,
    desc: 'Jas winter 15',
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
        desc: 'Home, in her room',
      },
      {
        time: '11:00 AM',
        desc: 'At the forest pond',
      },
      {
        time: '2:50 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jas',
    index: 1,
    desc: 'Jas winter 18',
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
    villager: 'jas',
    index: 2,
    desc: 'Jas 9th and 23rd always fallback to spring (bug?)',
    // this seems really weird, almost like the NOT check
    // results in a GOTO spring no matter if it passes or fails
    conditions: [
      {
        type: 'date',
        date: [9, 23],
      },
    ],
    goto: 7,
  },
  {
    villager: 'jas',
    index: 3,
    desc: 'Jas rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '11:00 AM',
        desc: 'Home',
      },
      {
        time: '7:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jas',
    index: 4,
    desc: 'Jas Tuesday Wednesday Friday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [1, 2, 4],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 AM',
        desc: 'At the Museum',
      },
      {
        time: '2:00 PM',
        desc: 'Outside the Museum',
      },
      {
        time: '4:20 PM',
        desc: "Outside Emily and Haley's house",
      },
      {
        time: '5:50 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jas',
    index: 5,
    desc: 'Jas Saturday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 5,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '10:00 AM',
        desc: 'Near the town graveyard',
      },
      {
        time: '12:00 PM',
        desc: 'At the town playground',
      },
      {
        time: '5:00 PM',
        desc: "Outside Emily and Haley's house",
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jas',
    index: 6,
    desc: 'Jas summer default',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '11:00 AM',
        desc: 'Outside her house',
      },
      {
        time: '1:20 PM',
        desc: 'At the beach',
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '7:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'jas',
    index: 7,
    desc: 'Jas default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in her room',
      },
      {
        time: '11:00 AM',
        desc: 'At the forest pond',
      },
      {
        time: '3:00 PM',
        desc: 'Home',
      },
      {
        time: '7:00 PM',
        desc: 'Home, in her room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(jas);
export default jas;
