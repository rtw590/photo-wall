<template>
  <v-layout column>
    <v-flex xs12 sm6>

      <h1>Hello</h1>

      <div
        v-for="posts in $store.state.posts"
        :key="posts.title">

        <v-card
          v-for="post in posts"
          :key="post.title">
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
                        <span class="headline white--text" v-text="post.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>

                <v-card-actions>
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
        
      </div>



    

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
    this.$store.dispatch("GET_POSTS");
  }
};
</script>


<style scoped>
</style>
