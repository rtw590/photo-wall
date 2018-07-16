<template>
  <v-toolbar color=blue dark>

     <v-menu offset-y class="hidden-md-and-up">
      <v-btn slot="activator" color="primary" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
      </v-btn>
      <!-- List for mobile navigation -->
      <v-list>
        <v-list-tile
          :to="{
                    name: 'home'
            }">
          <v-list-tile-title >
              Home
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          :to="{
                    name: 'test'
            }">
          <v-list-tile-title >
              My Photos
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          :to="{
              name: 'test'
            }">
          <v-list-tile-title >
              Photo Wall
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>


      <v-btn 
        flat
        :to="{
          name: 'home'
        }">
          Home</v-btn>

    <v-spacer></v-spacer>

    <div v-if="!$store.state.loggedIn">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          flat
          :to="{
            name: 'feedWIP'
          }">
            Feed</v-btn>
        <v-btn flat
          :to="{
            name: 'login'
          }">Login</v-btn>
        <v-btn 
          flat
          :to="{
            name: 'register'
          }">
            Register</v-btn>
      </v-toolbar-items>
    </div>
    <div v-if="$store.state.loggedIn">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          flat
          @click="logout">
            Logout</v-btn>
      </v-toolbar-items>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT");
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<style scoped>
.btn--router {
}
</style>


