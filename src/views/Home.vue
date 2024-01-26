<template>
  <v-row justify="center">
    <v-col
      cols="2"
      v-for="(villager, idx) in villagers"
      :key="idx"
      height="100%">
      <VillagerCard :data="villager" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import VillagerCard from '@/components/villager-card.vue';

const flagOptions = {
  communityCenterRestored: {
    name: 'communityCenterRestored',
    pretty: 'CC restored?',
    type: 'checkbox',
  },
  railroadOpen: {
    name: 'railroadOpen',
    pretty: 'Railroad open?',
    type: 'checkbox',
  },
  saloonGridballRoom: {
    name: 'saloonGridballRoom',
    pretty: 'Saloon gridball room?',
    type: 'checkbox',
  },
  abigailRelationship: {
    name: 'abigailRelationship',
    pretty: 'Abigail hearts',
    type: 'text',
  },
  alexRelationship: {
    name: 'alexRelationship',
    pretty: 'Alex hearts',
    type: 'text',
  },
  haleyRelationship: {
    name: 'haleyRelationship',
    pretty: 'Haley hearts',
    type: 'text',
  },
  leahRelationship: {
    name: 'leahRelationship',
    pretty: 'Leah hearts',
    type: 'text',
  },
  pennyRelationship: {
    name: 'pennyRelationship',
    pretty: 'Penny hearts',
    type: 'text',
  },
  samRelationship: {
    name: 'samRelationship',
    pretty: 'Sam hearts',
    type: 'text',
  },
  sebastianRelationship: {
    name: 'sebastianRelationship',
    pretty: 'Sebastian hearts',
    type: 'text',
  },
};

const villagers = [
  {
    name: 'abigail',
    prettyName: 'Abigail',
    options: {
      flags: [
        flagOptions.abigailRelationship,
        flagOptions.sebastianRelationship,
        flagOptions.railroadOpen,
      ],
    },
  },
  {
    name: 'alex',
    prettyName: 'Alex',
    options: {
      flags: [flagOptions.haleyRelationship, flagOptions.saloonGridballRoom],
    },
  },
  {
    name: 'caroline',
    prettyName: 'Caroline',
    options: {
      flags: [flagOptions.communityCenterRestored],
    },
  },
  {
    name: 'clint',
    prettyName: 'Clint',
    options: {
      flags: [flagOptions.communityCenterRestored],
    },
  },
  {
    name: 'demetrius',
    prettyName: 'Demetrius',
  },
  {
    name: 'elliott',
    prettyName: 'Elliott',
    options: {
      flags: [flagOptions.leahRelationship],
    },
  },
  // {
  //   name: 'emily',
  //   prettyName: 'Emily',
  //   options: {
  //     flags: [flagOptions.communityCenterRestored],
  //   },
  // },
  // {
  //   name: 'evelyn',
  //   prettyName: 'Evelyn',
  //   options: {
  //     flags: [flagOptions.communityCenterRestored],
  //   },
  // },
  // {
  //   name: 'george',
  //   prettyName: 'George',
  //   options: {
  //     flags: [flagOptions.saloonGridballRoom],
  //   },
  // },
  // {
  //   name: 'gus',
  //   prettyName: 'Gus',
  //   options: {
  //     flags: [
  //       flagOptions.communityCenterRestored,
  //       flagOptions.saloonGridballRoom,
  //     ],
  //   },
  // },
  // {
  //   name: 'haley',
  //   prettyName: 'Haley',
  //   options: {
  //     flags: [flagOptions.alexRelationship],
  //   },
  // },
  // {
  //   name: 'harvey',
  //   prettyName: 'Harvey',
  // },
  // {
  //   name: 'jas',
  //   prettyName: 'Jas',
  //   options: {
  //     flagOptions: [flagOptions.pennyRelationship, flagOptions.samRelationship],
  //   },
  // },
  // {
  //   name: 'jodi',
  //   prettyName: 'Jodi',
  //   options: {
  //     flagOptions: [flagOptions.communityCenterRestored],
  //   },
  // },
  // {
  //   name: 'kent',
  //   prettyName: 'Kent',
  //   options: {
  //     flagOptions: [flagOptions.saloonGridballRoom],
  //   },
  // },
  // {
  //   name: 'leah',
  //   prettyName: 'Leah',
  // },
  // {
  //   name: 'maru',
  //   prettyName: 'Maru',
  // },
  // {
  //   name: 'penny',
  //   prettyName: 'Penny',
  //   options: {
  //     flags: [flagOptions.pennyRelationship, flagOptions.samRelationship],
  //   },
  // },
  // {
  //   name: 'sam',
  //   prettyName: 'Sam',
  //   options: {
  //     flags: [
  //       flagOptions.samRelationship,
  //       flagOptions.pennyRelationship,
  //       flagOptions.communityCenterRestored,
  //     ],
  //   },
  // },
  // {
  //   name: 'sebastian',
  //   prettyName: 'Sebastian',
  //   options: {
  //     flags: [flagOptions.sebastianRelationship, flagOptions.railroadOpen],
  //   },
  // },
  // {
  //   name: 'shane',
  //   prettyName: 'Shane',
  //   options: {
  //     flags: [flagOptions.communityCenterRestored],
  //   },
  // },
];
</script>
