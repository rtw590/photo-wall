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
            style="border-radius: 5px;"
            dark
            @click="likePost($store.state.post._id, $store.state.user.userId)">
            <v-icon
              large
              color="white"
            >
              favorite
            </v-icon>
            <h1 v-text="$store.state.post.likes"></h1>
            </v-btn>
            <br>
          <div
            v-if="$store.state.loading">
            <div style="margin: 0 auto; text-align: center;">
              <img src="spinner.gif" alt="" style="height: 130px;">
            </div>
          </div>
          <div
            v-for="comment in $store.state.post.comments"
            :key="comment.title">
            <b><span v-text="comment.user"></span>: </b>
            <span v-text="comment.body"></span>
          </div>

          <v-layout row wrap style="background-color: #f2f2f2; border-radius: 5px; padding: 5px;">
     
            <v-flex d-flex xs12 sm12 md9>
              <v-text-field
                v-model="comment"
                label="Comment"
              ></v-text-field>
            </v-flex>
            <v-flex d-flex xs12 sm12 md3>
              <v-btn
                dark
                class="green"
                style="width: 100%;"
                  @click="postComment">
                  Post
              </v-btn>
            </v-flex>
          </v-layout>




          </v-card-text>

        </v-card>
      </v-flex>

    </v-layout>

</template>

<script>
import Posts from "@/services/Posts";
export default {
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    async likePost(postId, userId) {
      (await Posts.like(postId, userId)).data
      this.$store.dispatch("CLEAR_POST")
      this.$store.dispatch("LOADING_TRUE")
      this.$store.dispatch("VIEW_POST", this.$store.state.route.params.postId)
    },
    async postComment() {
      try {
        await Posts.postComment({
          // the backend will receive this information
          username: this.$store.state.user.user,
          userId: this.$store.state.user.userId,
          postId: this.$store.state.route.params.postId,
          comment: this.comment
        })
        this.comment = ''
        this.$store.dispatch("CLEAR_POST");
        this.$store.dispatch("LOADING_TRUE");
        this.$store.dispatch("VIEW_POST", this.$store.state.route.params.postId);
      } catch (error) {
        // this.error = error.response.data.error;
      }
    }
  },
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
