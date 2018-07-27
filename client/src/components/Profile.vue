<template>
    <div>
      <h1 v-text="$store.state.route.params.username" style="text-align: center"></h1>
      <h2 style="text-align: center">
        <router-link
          :to="{
            name: 'followers',
            params: {
                username: $store.state.route.params.username
                }
          }">
          Followers
        </router-link>
          <span> / </span>  
        <router-link
          :to="{
            name: 'following',
            params: {
                username: $store.state.route.params.username
                }
          }">
          Following
        </router-link>
      </h2>
      <div v-if="$store.state.route.params.username == $store.state.user.user" style="text-align: center;" >
        
      </div>
      <div v-else-if="$store.state.following == true" style="text-align: center;" >
        <v-btn
          dark
          color=red
          @click="follow($store.state.route.params.username, $store.state.user.userId)">
          Unfollow
        </v-btn>
      </div>
      <div v-else-if="$store.state.following == false" style="text-align: center;" >
        <v-btn
          dark
          color=green
          @click="follow($store.state.route.params.username, $store.state.user.userId)">
          Follow
        </v-btn>
      </div>
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
                  <!-- <h5>Posted by: <span v-text="post.postedBy"></span></h5> -->
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
  computed: {
    // async followingOrNot() {
    //   let username = this.$store.state.route.params.username;
    //   let loggedInUsername = this.$store.state.user.user;
    //   let following = (await Posts.followingOrNot(username, loggedInUsername))
    //     .data;
    //   console.log(following);
    // }
  },
  methods: {
    async likePost(postId, userId) {
      (await Posts.like(postId, userId)).data;
      this.$store.dispatch("CLEAR_PROFILE");
      this.$store.dispatch("LOADING_TRUE");
      let username = this.$store.state.route.params.username;
      this.$store.dispatch("GET_PROFILE", username);
    },
    async follow(pageOn, userId) {
      // this.$store.dispatch("CLEAR_FOLLOWING");
      (await Posts.follow(pageOn, userId)).data;
      let username = this.$store.state.route.params.username;
      let loggedInUsername = this.$store.state.user.user;
      let following = (await Posts.followingOrNot(username, loggedInUsername))
        .data;
      if (following == true) {
        following = false;
      } else {
        following = true;
      }
      this.$store.dispatch("CHANGE_FOLLOWING", following);
    }
  },
  computed: {},
  async mounted() {
    this.$store.dispatch("LOADING_TRUE");
    this.$store.dispatch("CLEAR_POST");
    this.$store.dispatch("CLEAR_POSTS");
    this.$store.dispatch("CLEAR_PROFILE");
    this.$store.dispatch("CLEAR_FOLLOWING");
    this.$store.dispatch("CLEAR_FOLLOWERS");
    let profileInformation = {};
    profileInformation.username = this.$store.state.route.params.username;
    profileInformation.loggedInUsername = this.$store.state.user.user;
    this.$store.dispatch("GET_PROFILE", profileInformation);
    let username = this.$store.state.route.params.username;
    let loggedInUsername = this.$store.state.user.user;
    let following = (await Posts.followingOrNot(username, loggedInUsername))
      .data;
    this.$store.dispatch("CHANGE_FOLLOWING", following);
  }
};
</script>


<style scoped>
.hide {
  display: none;
}
</style>
