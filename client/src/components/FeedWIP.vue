<template>
    <div>
        <v-container
          v-if="$store.state.loading">
          <div style="margin: 0 auto; text-align: center;">
            <img src="spinner.gif" alt="" style="height: 130px;">
          </div>
        </v-container>
        <v-layout
        row 
        wrap
        v-for="posts in $store.state.posts"
        :key="posts.title"
        pb-2>
     
      <v-flex 
        d-flex 
        xs12 sm6 md3 lg3
        middle
        v-for="post in posts"
        :key="post.title"
        pb-2
        pl-1
        pr-1>
        <v-card>
          <v-card-media
                  :src="post.src"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>

                <v-card-actions>
                  <v-btn 
                    :to="{
                      name: 'post',
                      params: {
                          postId: post._id
                          }
                    }"
                    color=green
                    dark>
                    View Image
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
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
