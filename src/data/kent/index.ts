import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const kent: Schedule[] = [
  {
    villager: 'kent',
    index: 0,
    desc: 'Kent rainy day',
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
        time: '8:30 AM',
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
        time: '9:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'kent',
    index: 1,
    desc: 'Kent spring Friday Saturday',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: [4, 5],
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '7:00 AM',
        desc: 'Near the town sewer entrance',
      },
      {
        time: '10:30 AM',
        desc: 'Home',
      },
      {
        time: '2:00 PM',
        desc: 'In the town square park',
      },
      {
        time: '5:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '11:50 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'kent',
    index: 2,
    desc: 'Kent Sunday gridball',
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
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '8:30 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '11:10 AM',
        desc: 'At the Saloon',
      },
      {
        time: '3:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'kent',
    index: 3,
    desc: 'Kent Sunday fallback',
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
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:10 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'kent',
    index: 4,
    desc: 'Kent default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '8:00 AM',
        desc: 'Home',
      },
      {
        time: '10:10 AM',
        desc: "At Pierre's General Store",
      },
      {
        time: '4:00 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '11:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(kent);
export default kent;
