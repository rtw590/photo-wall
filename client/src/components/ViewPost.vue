<template>
   <v-layout row wrap>
     
      <v-flex d-flex xs12 sm6 md6 middle>
        <!-- <v-card dark color="red">
          <v-card-media 
          :src=$store.state.post.src
          height="200px"></v-card-media>
        </v-card> -->

        <v-container
          v-if="$store.state.loading">
          <div style="margin: 0 auto; text-align: center;">
            <img src="spinner.gif" alt="" style="height: 130px;">
          </div>
        </v-container>

        <img :src="$store.state.post.src" alt="" style="width:100%">


      </v-flex>

      <v-flex d-flex xs12 sm6 md6 middle>
        <v-card color="white">
          <v-card-text>
            <v-btn
            color=red
            dark>
            <v-icon
              large
              color="white"
            >
              favorite
            </v-icon>
            <h1 v-text="$store.state.post.likes"></h1>
            </v-btn>
            <v-btn
            color=blue
            dark>
            COMMENT
            </v-btn>
            <br>
          <div
            v-for="comment in $store.state.post.comments"
            :key="comment.title">
            <b><span v-text="comment.user"></span>: </b>
            <span v-text="comment.body"></span>
          </div>
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
  methods: {},
  computed: {},
  mounted() {
    this.$store.dispatch("CLEAR_POSTS");
    this.$store.dispatch("LOADING_TRUE");
    let postId = this.$store.state.route.params.postId;
    console.log(`This is in mounted and this is the postId ${postId}`);
    this.$store.dispatch("VIEW_POST", postId);
  }
};
</script>


<style scoped>
</style>
