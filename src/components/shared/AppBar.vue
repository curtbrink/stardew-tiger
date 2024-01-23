<template>
  <v-app-bar class="pl-5 title-bar">
    <b>STARDEW-TIGER</b>
    <template v-slot:append>
      <v-container class="fill-width">
        <v-row>
          <v-col cols="3">
            This is cool!
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
</script>

<style>
.title-bar {
  font-family: 'Audiowide', cursive;
}

.fill-width {
  min-width: 900px;
}
</style>
