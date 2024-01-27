import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const vincent: Schedule[] = [
  {
    villager: 'vincent',
    index: 0,
    desc: 'Vincent spring 11',
    conditions: [
      {
        type: 'season',
        season: 'spring',
      },
      {
        type: 'date',
        date: 11,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '9:00 AM',
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
        desc: 'Home, in his room',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'vincent',
    index: 1,
    desc: 'Vincent winter 16',
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
        desc: 'Home',
      },
      {
        time: '2:00 PM',
        desc: 'In the town square park',
      },
      {
        time: '4:30 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'vincent',
    index: 2,
    desc: 'Vincent 9th and 23rd always fallback to spring (bug?)',
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
    villager: 'vincent',
    index: 3,
    desc: 'Vincent rainy day',
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
        time: '9:00 AM',
        desc: 'Home',
      },
      {
        time: '7:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'vincent',
    index: 4,
    desc: 'Vincent Tuesday Wednesday Friday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [1, 2, 4],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
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
        time: '5:40 PM',
        desc: 'Home',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'vincent',
    index: 5,
    desc: 'Vincent Saturday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 5,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '10:10 AM',
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
    villager: 'vincent',
    index: 6,
    desc: 'Vincent summer default',
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
        time: '9:00 AM',
        desc: 'Home',
      },
      {
        time: '1:40 PM',
        desc: 'At the beach',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'vincent',
    index: 7,
    desc: 'Vincent default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '9:00 AM',
        desc: 'Home',
      },
      {
        time: '2:00 PM',
        desc: 'In the town square park',
      },
      {
        time: '5:00 PM',
        desc: 'Home',
      },
      {
        time: '7:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(vincent);
export default vincent;
