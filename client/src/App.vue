<template>
  <div id="app">
    <!-- Wrapping in v-app required for vuetify -->
    <v-app>
      <page-header />
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
import PageHeader from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    PageHeader
  }
};
</script>


<style>
</style>
