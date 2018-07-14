<template>
   <v-layout row wrap>
     
      <v-flex d-flex xs12 sm6 md6 middle>
        <v-card dark color="red">
          <v-card-text>Meow</v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex xs12 sm6 md6 middle>
        <v-card dark color="blue">
          <v-card-text>Woof</v-card-text>
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
  computed: {},
  mounted() {
    console.log("mounted happened");
    this.$store.dispatch("CLEAR_POSTS");
    // let postId = this.$store.state.route.params.postId;
    // this.$store.dispatch("GET_POST", postId);
    // console.log("after everything runs");
  }
};
</script>


<style scoped>
</style>
