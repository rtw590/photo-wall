<template>
   <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card dark color="primary">
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-card dark color="red">
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm12 md4>
        <v-card dark color="accent">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    
    <!-- <h2>{{user.user}}</h2> -->

</template>

<script>
import TestService from "@/services/TestService";
export default {
  data() {
    return {
      user: ""
    };
  },
  async mounted() {
    //  request backnd for all the songs
    this.user = (await TestService.index()).data;
  }
};
</script>


<style scoped>
</style>
