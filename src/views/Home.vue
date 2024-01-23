<template>
  <v-row justify="center">
    <v-col cols="2" v-for="(villager, idx) in villagers" :key="idx" height="100%">
      <VillagerCard :data="villager" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import VillagerCard from '@/components/villager-card.vue';

const villagers = [
  {
    name: 'alex',
    prettyName: 'Alex',
    options: {
      flags: [{ name: 'haleyRelationship', type: 'text' }],
    },
  },
  {
    name: 'elliott',
    prettyName: 'Elliott',
    options: {
      flags: [{ name: 'leahRelationship', type: 'text' }],
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
        { name: 'samRelationship', type: 'text' },
        { name: 'pennyRelationship', type: 'text' },
        { name: 'communityCenterRestored', type: 'checkbox' },
      ],
    },
  },
  {
    name: 'sebastian',
    prettyName: 'Sebastian',
    options: {
      flags: [
        { name: 'sebastianRelationship', type: 'text' },
        { name: 'railroadOpen', type: 'checkbox' },
      ],
    },
  },
];
</script>
