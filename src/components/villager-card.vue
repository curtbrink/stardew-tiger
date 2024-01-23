<template>
  <v-card height="100%">
    <v-card-title>{{ data.prettyName }}</v-card-title>
    <v-card-text>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-img class="mx-auto" :src="portraitUrl" width="50%"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" style="text-align: center; max-height: 20px"><span class="current-step">{{ currentScheduleStep }}</span></v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-container>
        <v-row>
          <v-col cols="12" v-for="(item, idx) in data.options?.flags ?? []" :key="idx">
            <v-text-field :label="item" v-model="stateStore.flags[item]"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useScheduleStore } from '@/store/schedule';
import { useGlobalGameStateStore } from '@/store/globalState';
import { ref, watch } from 'vue';

const { data } = defineProps<{
  data: {
    name: string,
    prettyName: string,
    options?: {
      flags?: string[],
    }
  }
}>();

const scheduleStore = useScheduleStore();
const stateStore = useGlobalGameStateStore();
const currentScheduleStep = ref(scheduleStore.getCurrentScheduleStepForVillager(data.name));

const portraitUrl = `img/portraits/${data.name}.png`;

watch(() => stateStore.getTimestamp, () => {
  currentScheduleStep.value = scheduleStore.getCurrentScheduleStepForVillager(data.name);
});


</script>
<style scoped>
.current-step {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
</style>
