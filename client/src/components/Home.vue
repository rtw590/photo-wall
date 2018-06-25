<template>
   <v-layout row wrap>
      <button
        @click="changeUsers">
        Change User
      </button>
      <v-flex d-flex xs12 sm6 md4>
        <v-card dark color="primary">
          <v-card-text>Test</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-card dark color="red">
          <v-card-text></v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm12 md4>
        <v-card dark color="accent">
          <v-card-text>
            <span>
              <h1>{{ users.user }}</h1>
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // TODO - Define Methods
    // Can call getters here
    // Users is called in the component, it then returns data from the store using a getter
    // users() {
    //   return this.$store.getters.unregistered
    // }
    // Can call mutations here
    // This mutation would commit register and pass in the user.id payload
    // registerUser(user) {
    //   this.$store.commit('register', user.id);
    // }
    // Can call actions
    // This action dispatched the register action, which fires the register mutation and includes the user.id payload
    // registerUser(user) {
    //   this.$store.dispatch("register", user.id);
    // }

    changeUsers() {
      this.$store.dispatch("CHANGE_USERS");
    }
  },
  computed: {
    // TODO - Define computed
    // Can call getters
    users() {
      return this.$store.getters.ALL_USERS;
    }
  },
  async mounted() {
    //  request backnd for all the songs
    this.$store.dispatch("GET_ALL_USERS");
  }
};
</script>


<style scoped>
</style>
