<template>
  <v-row justify="center">
    <v-col
      :cols="cardColumnWidth"
      v-for="(villager, idx) in villagers"
      :key="idx"
      height="100%">
      <VillagerCard :data="villager" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import VillagerCard from '@/components/villager-card.vue';
import { useDisplay } from 'vuetify';
import { computed } from 'vue';

const { xlAndUp, mdAndUp } = useDisplay();
const cardColumnWidth = computed(() =>
  xlAndUp.value ? 2 : mdAndUp.value ? 3 : 4,
);

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
  busServiceRestored: {
    name: 'busServiceRestored',
    pretty: 'Bus service restored?',
    type: 'checkbox',
  },
  saloonGridballRoom: {
    name: 'saloonGridballRoom',
    pretty: 'Saloon gridball room?',
    type: 'checkbox',
  },
  beachBridgeRepaired: {
    name: 'beachBridgeRepaired',
    pretty: 'Beach bridge repaired?',
    type: 'checkbox',
  },
  leoMoved: {
    name: 'leoMoved',
    pretty: 'Leo moved to mainland?',
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
  {
    name: 'emily',
    prettyName: 'Emily',
    options: {
      flags: [
        flagOptions.communityCenterRestored,
        flagOptions.busServiceRestored,
      ],
    },
  },
  {
    name: 'evelyn',
    prettyName: 'Evelyn',
    options: {
      flags: [flagOptions.communityCenterRestored],
    },
  },
  {
    name: 'george',
    prettyName: 'George',
    options: {
      flags: [flagOptions.saloonGridballRoom],
    },
  },
  {
    name: 'gus',
    prettyName: 'Gus',
    options: {
      flags: [
        flagOptions.communityCenterRestored,
        flagOptions.saloonGridballRoom,
      ],
    },
  },
  {
    name: 'haley',
    prettyName: 'Haley',
    options: {
      flags: [flagOptions.alexRelationship],
    },
  },
  {
    name: 'harvey',
    prettyName: 'Harvey',
  },
  {
    name: 'jas',
    prettyName: 'Jas',
  },
  {
    name: 'jodi',
    prettyName: 'Jodi',
    options: {
      flags: [flagOptions.communityCenterRestored],
    },
  },
  {
    name: 'kent',
    prettyName: 'Kent',
    options: {
      flags: [flagOptions.saloonGridballRoom],
    },
  },
  {
    name: 'leah',
    prettyName: 'Leah',
    options: {
      flags: [flagOptions.beachBridgeRepaired],
    },
  },
  {
    name: 'leo',
    prettyName: 'Leo',
    options: {
      flags: [flagOptions.leoMoved],
    },
  },
  {
    name: 'lewis',
    prettyName: 'Lewis',
    options: {
      flags: [flagOptions.communityCenterRestored],
    },
  },
  {
    name: 'linus',
    prettyName: 'Linus',
  },
  {
    name: 'marnie',
    prettyName: 'Marnie',
  },
  {
    name: 'maru',
    prettyName: 'Maru',
    options: {
      flags: [flagOptions.communityCenterRestored],
    },
  },
  {
    name: 'pam',
    prettyName: 'Pam',
    options: {
      flags: [flagOptions.busServiceRestored],
    },
  },
  {
    name: 'penny',
    prettyName: 'Penny',
    options: {
      flags: [
        flagOptions.pennyRelationship,
        flagOptions.samRelationship,
        flagOptions.communityCenterRestored,
      ],
    },
  },
  {
    name: 'pierre',
    prettyName: 'Pierre',
  },
  {
    name: 'robin',
    prettyName: 'Robin',
    options: {
      flags: [flagOptions.communityCenterRestored],
    },
  },
  {
    name: 'sam',
    prettyName: 'Sam',
    options: {
      flags: [
        flagOptions.samRelationship,
        flagOptions.pennyRelationship,
        flagOptions.communityCenterRestored,
      ],
    },
  },
  {
    name: 'sandy',
    prettyName: 'Sandy',
    options: {
      flags: [flagOptions.busServiceRestored],
    },
  },
  {
    name: 'sebastian',
    prettyName: 'Sebastian',
    options: {
      flags: [flagOptions.sebastianRelationship, flagOptions.railroadOpen],
    },
  },
  {
    name: 'shane',
    prettyName: 'Shane',
    options: {
      flags: [
        flagOptions.communityCenterRestored,
        flagOptions.saloonGridballRoom,
      ],
    },
  },
  {
    name: 'vincent',
    prettyName: 'Vincent',
  },
  {
    name: 'willy',
    prettyName: 'Willy',
  },
];
</script>
