<template>
  <v-navigation-drawer :width="350">
    <v-card>
      <v-card-title>Global State</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="8">
              <v-select :items="seasonOptions" item-title="label" item-value="value" v-model="selectedSeason"/>
            </v-col>
            <v-col cols="4">
              <v-text-field placeholder="Enter date" :rules="[dateRule]" v-model="selectedDate" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-select :items="TimeValues" v-model="selectedTime"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-select :items="weatherOptions" item-title="label" item-value="value" v-model="selectedWeather"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-select :items="marriageOptions" item-title="label" item-value="value" v-model="selectedSpouse"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn block @click="saveSelections">Apply</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue';
import { useGlobalGameStateStore } from '@/store/globalState';
import { Season, TimeValues, Weather } from '@/data/types';

const stateStore = useGlobalGameStateStore();

const selectedSeason = ref(stateStore.season);
const selectedDate = ref(stateStore.date);
const selectedWeather = ref(stateStore.weather);
const selectedTime = ref(stateStore.time);
const selectedSpouse = ref(stateStore.marriedTo);

watch(() => stateStore.browserLoadAttempted, () => {
  selectedSeason.value = stateStore.season;
  selectedDate.value = stateStore.date;
  selectedWeather.value = stateStore.weather;
  selectedTime.value = stateStore.time;
  selectedSpouse.value = stateStore.marriedTo;
})

const dateRule = (v: string) => {
  if (!v) return false;
  const numberV = Number(v);
  if (isNaN(numberV)) return false;
  if (numberV < 1) return false;
  return numberV <= 28;
}

const saveSelections = () => {
  const payload = {
    season: selectedSeason.value as Season,
    date: Number(selectedDate.value),
    weather: selectedWeather.value as Weather,
    time: selectedTime.value,
    marriedTo: selectedSpouse.value,
  };
  stateStore.setGlobalGameState(payload);
}

const seasonOptions: { label: string, value: Season }[] = [
  {
    label: 'Spring',
    value: 'spring',
  },
  {
    label: 'Summer',
    value: 'summer',
  },
  {
    label: 'Fall',
    value: 'fall',
  },
  {
    label: 'Winter',
    value: 'winter',
  },
];

const weatherOptions: { label: string, value: Weather }[] = [
  {
    label: 'Sunny',
    value: 'sun',
  },
  {
    label: 'Raining',
    value: 'rain',
  },
];

const marriageOptions: { label: string, value: string }[] = [
  {
    label: 'Not Married',
    value: 'single',
  },
  {
    label: 'Alex',
    value: 'alex',
  },
  {
    label: 'Elliott',
    value: 'elliott',
  },
  {
    label: 'Harvey',
    value: 'harvey',
  },
  {
    label: 'Sam',
    value: 'sam',
  },
  {
    label: 'Sebastian',
    value: 'sebastian',
  },
  {
    label: 'Shane',
    value: 'shane',
  },
  {
    label: 'Abigail',
    value: 'abigail',
  },
  {
    label: 'Emily',
    value: 'emily',
  },
  {
    label: 'Haley',
    value: 'haley',
  },
  {
    label: 'Leah',
    value: 'leah',
  },
  {
    label: 'Maru',
    value: 'maru',
  },
  {
    label: 'Penny',
    value: 'penny',
  },
];
</script>
