<template>

     <v-layout row wrap>
       <v-flex d-flex xs0 sm3 md3 lg4>
       </v-flex>
      <v-flex d-flex xs12 sm6 md6 lg4>
        <div class="white elevation-4">

          <v-toolbar flat dense class="green" dark>
          <!-- Using title for a 1 way binding. Can be defined in data or props -->
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pb-4 pt-4">

     <ul class="errors" center>
      <li v-for="item in errors">
        {{ item.msg }}
      </li>
      </ul>
    
     <v-text-field
        v-model="username"
        label="Username"
        required
        :rules="[rules.required]"
      ></v-text-field>


      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
        :rules="[rules.required]"
      ></v-text-field>


      <v-btn
      dark
      class="green"
      style="width: 100%; margin: 0 auto;"
        @click="login">
        Login
      </v-btn>
      </div>
        </div>
      </v-flex>
      <v-flex d-flex xs0 sm3 md3 lg4>
       </v-flex>
     </v-layout>


</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  // Set two way bindings for these variables used with v-model above
  data() {
    return {
      password: "",
      username: "",
      errors: null,
      rules: {
        required: value => !!value || "Required."
      }
    };
  },
  methods: {
    // Button has on click to call this function from AuthenticationService
    // register is the name of the function on the click event
    async login() {
      try {
        const response = await AuthenticationService.login({
          // the backend will receive this information
          username: this.username,
          password: this.password
        });
        // We call the setToken and setUser action that is from the store and we pass is the action name and the token/user
        // this.$store.dispatch("setToken", response.data.token);
        // this.$store.dispatch("setUser", response.data.user);

        this.errors = response.data.errors;
        if (this.errors == null) {
          this.$router.push({
            name: "home"
          });
        }
      } catch (error) {
        // this.error = error.response.data.error;
      }
    }
  }
};
</script>


<style scoped>
.errors {
  list-style-type: none;
  font-weight: 500;
  color: red;
}
</style>

