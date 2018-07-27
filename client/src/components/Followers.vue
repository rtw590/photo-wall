<template>
  <div>
    <v-container>
      <h1 style="margin: 0 auto; text-align: center;">
        <router-link
          :to="{
            name: 'profile',
            params: {
                username: $store.state.route.params.username
                }
          }">
          <span v-text="$store.state.route.params.username"></span>
        </router-link>'s Followers</h1>
      <div style="margin: 0 auto; text-align: center;"
      v-if="$store.state.loading">
            <img src="spinner.gif" alt="" style="height: 130px;">
      </div>
      <v-layout
        row 
        wrap
        mb-2
        v-for="followers in $store.state.followersList"
        :key="followers.title">
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
        <router-link
          :to="{
            name: 'profile',
            params: {
                username: followers.username
                }
          }">
          <h1 v-text="followers.username"></h1>
        </router-link>
        </v-flex>
        <v-flex
        d-flex 
        xs12 sm4 md3 lg2
        >
          <v-btn
            v-if="followers.isUser"
            style="display:none;"
            dark
            color=green
            @click="follow(followers.username, $store.state.user.userId)">
            Follow
          </v-btn>
          <v-btn
            v-else-if="!followers.followingUser"
            dark
            color=green
            @click="follow(followers.username, $store.state.user.userId)">
            Follow
          </v-btn>
          <v-btn
            v-else-if="followers.followingUser"
            dark
            color=red
            @click="follow(followers.username, $store.state.user.userId)">
            Unfollow
          </v-btn>
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
  methods: {
    async follow(pageOn, userId) {
      this.$store.dispatch("CLEAR_FOLLOWERS");
      this.$store.dispatch("LOADING_TRUE");
      (await Posts.follow(pageOn, userId)).data;
      let bothUsers = {};
      bothUsers.pageOn = this.$store.state.route.params.username;
      bothUsers.username = this.$store.state.user.user;
      this.$store.dispatch("GET_FOLLOWERS", bothUsers);
    }
  },
  computed: {},
  async mounted() {
    this.$store.dispatch("LOADING_TRUE");
    this.$store.dispatch("CLEAR_POST");
    this.$store.dispatch("CLEAR_FOLLOWERS");
    let bothUsers = {};
    bothUsers.pageOn = this.$store.state.route.params.username;
    bothUsers.username = this.$store.state.user.user;
    this.$store.dispatch("GET_FOLLOWERS", bothUsers);
  }
};
</script>


<style scoped>
</style>
