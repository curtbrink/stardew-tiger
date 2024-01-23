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
      flags: ['haleyRelationship'],
    },
  },
  {
    name: 'elliott',
    prettyName: 'Elliott',
    options: {
      flags: ['leahRelationship'],
    },
  },
  {
    name: 'harvey',
    prettyName: 'Harvey',
  }
];
</script>
