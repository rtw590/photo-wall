<template>
    <div>
      <h1 v-text="$store.state.user.user" style="text-align: center"></h1>
      <h2 style="text-align: center">Followers  <span> / </span>  Following</h2>
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
          <router-link
          :to="{
            name: 'post',
            params: {
                postId: post._id
                }
          }">
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
          </router-link>

                <v-card-actions>
                  <h5>Posted by: <span v-text="post.username"></span></h5>
                  <v-spacer></v-spacer>
                  <v-btn 
                    icon
                    @click="likePost(post._id, $store.state.user.userId)">
                    <v-icon color=red>favorite</v-icon>
                    <span v-text="post.likes"> </span>
                  </v-btn>
                </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
import Posts from "@/services/Posts";
export default {
  data() {
    return {};
  },
  methods: {
    async likePost(postId, userId) {
      (await Posts.like(postId, userId)).data
      this.$store.dispatch("CLEAR_POSTS")
      this.$store.dispatch("LOADING_TRUE")
      this.$store.dispatch("GET_POSTS")
    }
  },
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
