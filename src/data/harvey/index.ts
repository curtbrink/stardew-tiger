import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const harvey: Schedule[] = [
  {
    villager: 'harvey',
    index: 0,
    desc: 'Harvey married but working at the clinic still',
    isMarriage: true,
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [1, 3],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On the farm',
      },
      {
        time: '6:30 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '6:00 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'harvey',
    index: 1,
    desc: 'Harvey married Monday',
    isMarriage: true,
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
      {
        type: 'weather',
        weather: 'sun',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'On the farm',
      },
      {
        time: '8:30 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '12:00 PM',
        desc: 'At the Community Center fountain',
      },
      {
        time: '5:00 PM',
        desc: 'On the farm',
      },
      {
        time: '10:00 PM',
        desc: 'On the farm, in bed',
      },
    ],
  },
  {
    villager: 'harvey',
    index: 2,
    desc: 'Harvey winter 15',
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
        time: '8:40 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '12:00 PM',
        desc: 'Home, in his room',
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
    villager: 'harvey',
    index: 3,
    desc: 'Harvey spring rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    goto: 7,
  },
  {
    villager: 'harvey',
    index: 4,
    desc: 'Harvey Tuesday Thursday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [2, 4],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:30 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '6:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'harvey',
    index: 5,
    desc: 'Harvey Friday',
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
        time: '8:30 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '12:00 PM',
        desc: "At Pierre's General Store",
      },
      {
        time: '3:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'harvey',
    index: 6,
    desc: 'Harvey Saturday',
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
        time: '8:30 AM',
        desc: 'At the Museum',
      },
      {
        time: '3:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'harvey',
    index: 7,
    desc: 'Harvey winter default',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:40 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '12:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '5:30 PM',
        desc: 'At the Saloon',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'harvey',
    index: 8,
    desc: 'Harvey fall default',
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
        time: '8:30 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '12:00 PM',
        desc: 'Near the town sewer entrance',
      },
      {
        time: '5:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'harvey',
    index: 9,
    desc: 'Harvey summer default',
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
        time: '8:30 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '12:00 PM',
        desc: 'At the Community Center fountain',
      },
      {
        time: '5:30 PM',
        desc: 'At the clinic, working',
      },
      {
        time: '6:40 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'harvey',
    index: 10,
    desc: 'Harvey default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:30 AM',
        desc: 'At the clinic, working',
      },
      {
        time: '12:00 PM',
        desc: 'In the town square park',
      },
      {
        time: '5:30 PM',
        desc: 'At the clinic, working',
      },
      {
        time: '6:40 PM',
        desc: 'Home, in his room',
      },
      {
        time: '10:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(harvey);
export default harvey;
