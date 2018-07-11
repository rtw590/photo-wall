<template>
  <v-layout column>
    <v-flex xs12 sm6>

      <h1>Hello</h1>

      <div
        v-for="posts in $store.state.posts"
        :key="posts.title">

        <div
          v-for="post in posts"
          :key="post.title">
          <h1 v-text="post.title"></h1>
        </div>
        
      </div>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  methods: {},
  computed: {
    
  },
  mounted() {
    this.$store.dispatch("GET_POSTS");
  }
};
</script>


<style scoped>
</style>
