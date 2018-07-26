<template>
  <div>
    <v-container>
      <v-layout
        row 
        wrap
        mb-2>
        <v-flex
        d-flex 
        xs0 sm1 md2 lg3
        >
        </v-flex>
        <v-flex
        style="text-align: center;"
        d-flex 
        xs12 sm2 md2 lg2
        >
          <div>
            <img src="placeholder.jpg" alt="" style="width:50%;">
          </div>
        </v-flex>
        <v-flex
        d-flex 
        xs12 sm4 md3 lg2
        >
          <h1>Fatcat</h1>
        </v-flex>
        <v-flex
        d-flex 
        xs12 sm4 md3 lg2
        >
          <v-btn
          dark
          style="width:100%;"
          color=green>Follow</v-btn>
        </v-flex>
        <v-flex
        d-flex 
        xs0 sm1 md2 lg3
        >
        </v-flex>
      </v-layout>




      


      
    </v-container>
  </div>
</template>

<script>
import Posts from "@/services/Posts";
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {
    this.$store.dispatch("LOADING_TRUE");
    this.$store.dispatch("CLEAR_POST");
    this.$store.dispatch("GET_POSTS");
  }
};
</script>


<style scoped>
</style>
