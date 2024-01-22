<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list density="compact" nav>
      <v-list-item
        :to="{ path: '/market' }"
        prepend-icon="mdi-currency-usd"
        title="Market" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
</script>
