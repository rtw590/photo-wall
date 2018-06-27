<template>
   <div>

     <!-- TODO: Make this a v-if and a v-for to loop through errors -->
     <div v-html="error" class="error"></div>

     <v-text-field
        v-model="username"
        label="Username"
      ></v-text-field>

      <br>

      <v-text-field
        v-model="email"
        label="Email"
      ></v-text-field>

      <br>

      <v-text-field
        v-model="password"
        label="Password"
        type="password"
      ></v-text-field>

      <br>

      <v-text-field
        v-model="password2"
        label="Please Enter Your Password Again"
        type="password"
      ></v-text-field>

      <br>

      <v-btn
      dark
      class="green"
        @click="register">
        Register
      </v-btn>

    </div>

</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  // Set two way bindings for these variables used with v-model above
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      username: "",
      error: null
    };
  },
  methods: {
    // Button has on click to call this function from AuthenticationService
    // register is the name of the function on the click event
    async register() {
      try {
        const response = await AuthenticationService.register({
          // the backend will receive this information
          username: this.username,
          email: this.email,
          password: this.password,
          password2: this.password2
        });
        // We call the setToken and setUser action that is from the store and we pass is the action name and the token/user
        // this.$store.dispatch("setToken", response.data.token);
        // this.$store.dispatch("setUser", response.data.user);

        console.log(response);
        console.log(response.data.errors);
        this.error = response.data.errors;
        // this.$router.push({
        //   name: "home"
        // });
      } catch (error) {
        // this.error = error.response.data.error;
      }
    }
  }
};
</script>


<style scoped>
</style>
