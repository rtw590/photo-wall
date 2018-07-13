<template>
    <div>
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




    <v-dialog
      v-model="dialog"
      width="80%"
    >
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        View Image
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          <v-layout row wrap>
     
          <v-flex xs12 sm6 md6 lg6>
            <v-card-media
                  :src="post.src"
                  height="100%"
                >
            </v-card-media>
          </v-flex>
          <v-flex xs12 sm6 md6 lg6>
            <div style="background-color: blue; height: 300px"></div>
          </v-flex>
          </v-layout>
        </v-card-text>

        <!-- <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text> -->

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>





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
    return {
      dialog: false
    };
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
