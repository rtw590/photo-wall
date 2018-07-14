<template>
   <v-layout row wrap>
     <h1>Hello</h1>
     
      <v-flex d-flex xs12 sm6 md4 middle>
        <v-card dark color="red">
          <v-card-text>Test</v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex xs12 sm6 md4 middle>
        <v-card dark color="blue">
          <v-card-text>Test</v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex xs12 sm6 md4 middle>
        <v-card dark color="green">
          <v-card-text>Test</v-card-text>
        </v-card>
      </v-flex>

    </v-layout>

</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    posts() {
      return this.$store.getters.ALL_POSTS;
    }
  },
  mounted() {
    this.$store.dispatch("GET_POSTS");
  }
};
</script>


<style scoped>
</style>
