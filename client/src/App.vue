<template>
  <div id="app">
    <!-- Wrapping in v-app required for vuetify -->
    <v-app>
      <main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
// Bring in componenet to use inside app

export default {
  name: "app"
};
</script>


<style>
</style>
