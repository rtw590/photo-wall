<template>
   <v-layout row wrap>
     
      <v-flex d-flex xs12 sm6 md4 middle>
        <v-card dark color="red">
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
