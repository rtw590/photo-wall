<template>
<div>
  <h1>Is the user logged in?</h1>
  <h2 v-if="$store.state.loggedIn">
    User is logged in
  </h2>
  <h2 v-if="!$store.state.loggedIn">
    Nope
  </h2>
  <h3>
    {{$store.state.users.user}}
  </h3>
  <div 
        v-for="post in posts" 
        :key="post.id">
    <h1>{{post.name}}</h1>
    <h2>{{post.body}}</h2>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    posts() {
      return this.$store.getters.ALL_POSTS;
    }
  },
  mounted() {
    this.$store.dispatch("GET_POSTS");
  }
};
</script>


<style scoped>
</style>
