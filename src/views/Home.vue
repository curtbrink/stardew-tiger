<template>
  <v-row justify="center">
    <v-col cols="2" v-for="(villager, idx) in villagers" :key="idx" height="100%">
      <VillagerCard :data="villager" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import VillagerCard from '@/components/villager-card.vue';

const flagOptions = {
  communityCenterRestored: { name: 'communityCenterRestored', type: 'checkbox' },
  railroadOpen: { name: 'railroadOpen', type: 'checkbox' },
  haleyRelationship: { name: 'haleyRelationship', type: 'text' },
  leahRelationship: { name: 'leahRelationship', type: 'text' },
  pennyRelationship: { name: 'pennyRelationship', type: 'text' },
  samRelationship: { name: 'samRelationship', type: 'text' },
  sebastianRelationship: { name: 'sebastianRelationship', type: 'text' },
}

const villagers = [
  {
    name: 'alex',
    prettyName: 'Alex',
    options: {
      flags: [flagOptions.haleyRelationship],
    },
  },
  {
    name: 'elliott',
    prettyName: 'Elliott',
    options: {
      flags: [flagOptions.leahRelationship],
    },
  },
  {
    name: 'harvey',
    prettyName: 'Harvey',
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
    name: 'sebastian',
    prettyName: 'Sebastian',
    options: {
      flags: [
        flagOptions.sebastianRelationship,
        flagOptions.railroadOpen,
      ],
    },
  },
  {
    name: 'shane',
    prettyName: 'Shane',
    options: {
      flags: [flagOptions.communityCenterRestored],
    },
  },
];
</script>
