import { Schedule } from '@/data/types';
import { validateSeasonalLevelSchedules } from '@/data/validation';

const samSpring: Schedule[] = [
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 0,
    desc: 'Sam spring day 9 Penny time <3',
    conditions: [
      {
        type: 'date',
        date: 9,
      },
      {
        type: 'flag',
        flagName: 'pennyRelationship',
        flagCheck: 'lt',
        flagValue: 6,
      },
      {
        type: 'flag',
        flagName: 'samRelationship',
        flagCheck: 'lt',
        flagValue: 6,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '11:00 AM',
        desc: 'On the bridge near the ice cream stand',
      },
      {
        time: '4:00 PM',
        desc: 'Outside Emily and Haley\'s house',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 1,
    desc: 'Sam spring day 23 Penny time <3',
    conditions: [
      {
        type: 'date',
        date: 23,
      },
      {
        type: 'flag',
        flagName: 'pennyRelationship',
        flagCheck: 'lt',
        flagValue: 6,
      },
      {
        type: 'flag',
        flagName: 'samRelationship',
        flagCheck: 'lt',
        flagValue: 6,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '11:00 AM',
        desc: 'On the bridge near the ice cream stand',
      },
      {
        time: '4:00 PM',
        desc: 'Outside Emily and Haley\'s house',
      },
      {
        time: '7:00 PM',
        desc: 'Home',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 2,
    desc: 'Sam rainy day coin flip',
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
        time: '11:00 AM',
        desc: 'Home, either in his room or not',
      },
      {
        time: '2:00 PM',
        desc: 'Either at the Saloon or home, in his room',
      },
      {
        time: '3:00 PM',
        desc: 'Either at the Saloon or home',
      },
      {
        time: '5:00 PM',
        desc: 'Either at the Saloon or home, in his room',
      },
      {
        time: '7:40 PM',
        desc: 'Home, in his room'
      },
      {
        time: '8:00 PM',
        desc: 'Home, in bed'
      }
    ],
  },
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 3,
    desc: 'Sam spring Monday Museum job',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
      {
        type: 'flag',
        flagName: 'communityCenterRestored',
        flagCheck: 'eq',
        flagValue: true,
      }
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '11:00 AM',
        desc: 'At the Museum',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 4,
    desc: 'Sam spring Wednesday Museum job',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 2,
      },
      {
        type: 'flag',
        flagName: 'communityCenterRestored',
        flagCheck: 'eq',
        flagValue: true,
      }
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '11:00 AM',
        desc: 'At the Museum',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 5,
    desc: 'Sam spring Monday JojaMart job',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 0,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '11:00 AM',
        desc: 'At JojaMart, working',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 6,
    desc: 'Sam spring Wednesday JojaMart job',
    conditions: [
      {
        type: 'dayOfWeek',
        dayOfWeek: 2,
      },
    ],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '11:00 AM',
        desc: 'At JojaMart, working',
      },
      {
        time: '4:00 PM',
        desc: 'Home, in his room',
      },
      {
        time: '9:30 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 7,
    desc: 'Sam spring Tuesday',
    conditions: [{
      type: 'dayOfWeek',
      dayOfWeek: 1,
    }],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '2:00 PM',
        desc: 'Outside the Mayor\'s house',
      },
      {
        time: '6:30 PM',
        desc: 'Home, in his room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed'
      }
    ],
  },
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 8,
    desc: 'Sam spring Thursday',
    conditions: [{
      type: 'dayOfWeek',
      dayOfWeek: 3,
    }],
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '1:40 PM',
        desc: 'Outside the Mayor\'s house',
      },
      {
        time: '6:30 PM',
        desc: 'Home, in his room',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed'
      }
    ],
  },
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 9,
    desc: 'Sam spring Friday',
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
        time: '11:00 AM',
        desc: 'Outside his house',
      },
      {
        time: '3:00 PM',
        desc: 'At the Saloon',
      },
      {
        time: '9:20 PM',
        desc: 'Home, in bed',
      },
    ],
  },
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 10,
    desc: 'Sam spring Saturday',
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
        time: '8:00 AM',
        desc: 'Outside Haley and Emily\'s house',
      },
      {
        time: '12:30 PM',
        desc: 'Home, in his room',
      },
      {
        time: '6:00 PM',
        desc: 'Outside his house',
      },
      {
        time: '7:40 PM',
        desc: 'Home, in bed'
      }
    ],
  },
  {
    villager: 'sam',
    type: 'seasonal',
    season: 'spring',
    index: 11,
    desc: 'Sam spring default',
    steps: [
      {
        time: '6:00 AM',
        desc: 'Home, in his room',
      },
      {
        time: '1:40 PM',
        desc: 'Outside the Mayor\'s house',
      },
      {
        time: '6:30 PM',
        desc: 'Home',
      },
      {
        time: '9:00 PM',
        desc: 'Home, in bed',
      },
    ],
  },
];

validateSeasonalLevelSchedules(samSpring);
export default samSpring;
