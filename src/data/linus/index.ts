import { Schedule } from '@/data/types';
import { validateVillagerLevelSchedules } from '@/data/validation';

const linus: Schedule[] = [
  {
    villager: 'linus',
    index: 0,
    desc: 'Linus Winter 15',
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
        desc: 'In his tent',
      },
      {
        time: '11:00 AM',
        desc: 'Outside his tent',
      },
      {
        time: '4:00 PM',
        desc: 'At the Night Market',
      },
      {
        time: '11:30 PM',
        desc: 'In his tent, in bed',
      },
    ],
  },
  {
    villager: 'linus',
    index: 1,
    desc: 'Linus rainy day',
    conditions: [
      {
        type: 'weather',
        weather: 'rain',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'In his tent',
      },
      {
        time: '9:30 AM',
        desc: 'Outside his tent',
      },
      {
        time: '10:10 AM',
        desc: 'In his tent',
      },
      {
        time: '3:00 PM',
        desc: 'Outside his tent',
      },
      {
        time: '7:00 PM',
        desc: 'In his tent',
      },
      {
        time: '11:30 PM',
        desc: 'In his tent, in bed',
      },
    ],
  },
  {
    villager: 'linus',
    index: 2,
    desc: 'Linus summer default',
    conditions: [
      {
        type: 'season',
        season: 'summer',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'In his tent',
      },
      {
        time: '6:30 AM',
        desc: 'At the mountain lake',
      },
      {
        time: '4:00 PM',
        desc: 'Outside his tent',
      },
      {
        time: '8:20 PM',
        desc: 'In his tent',
      },
      // does he actually not sleep in summer/fall/winter? there's no linus_sleep listed for these
      // OwO?
    ],
  },
  {
    villager: 'linus',
    index: 3,
    desc: 'Linus fall default',
    conditions: [
      {
        type: 'season',
        season: 'fall',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'In his tent',
      },
      {
        time: '7:00 AM',
        desc: 'Outside his tent',
      },
      {
        time: '9:00 AM',
        desc: 'Outside the Spa',
      },
      {
        time: '2:00 PM',
        desc: 'At the mountain lake',
      },
      {
        time: '6:00 PM',
        desc: 'In his tent',
      },
    ],
  },
  {
    villager: 'linus',
    index: 4,
    desc: 'Linus winter default',
    conditions: [
      {
        type: 'season',
        season: 'winter',
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'In his tent',
      },
      {
        time: '11:00 AM',
        desc: 'Outside his tent',
      },
      {
        time: '2:00 PM',
        desc: 'At the Spa',
      },
      {
        time: '6:00 PM',
        desc: 'In his tent',
      },
    ],
  },
  {
    villager: 'linus',
    index: 5,
    desc: 'Linus default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'In his tent',
      },
      {
        time: '6:30 AM',
        desc: 'Outside his tent',
      },
      {
        time: '9:30 AM',
        desc: 'At the mountain lake',
      },
      {
        time: '2:00 PM',
        desc: 'Outside his tent',
      },
      {
        time: '7:00 PM',
        desc: 'In his tent',
      },
      {
        time: '11:00 PM',
        desc: 'In his tent, in bed',
      },
    ],
  },
];

validateVillagerLevelSchedules(linus);
export default linus;
