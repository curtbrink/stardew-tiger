<template>
  <v-app>
    <v-main>
      <AppBar />
      <NavDrawer />
      <v-container fluid>
        <suspense>
          <router-view />
        </suspense>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavDrawer from '@/components/shared/NavDrawer.vue';
import { onBeforeMount } from 'vue';
import AppBar from '@/components/shared/AppBar.vue';
import { useScheduleStore } from '@/store/schedule';
import { useGlobalGameStateStore } from '@/store/globalState';

onBeforeMount(async () => {
  document.title = 'Stardew Tiger';

  const scheduleStore = useScheduleStore();
  await scheduleStore.init();

  console.log('attempting load from browser');
  const globalStateStore = useGlobalGameStateStore();
  await globalStateStore.loadStateFromBrowser();
  console.log('loaded from browser');
});
</script>

<style>
@font-face {
  font-family: 'Audiowide';
  font-display: block;
  src: url('/fonts/Audiowide-Regular.ttf');
}
</style>
