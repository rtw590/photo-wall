<template>
  <div>
    <h1>tHESE ARE THE FOLLOWING</h1>
  </div>
</template>

<script>
import Posts from "@/services/Posts";
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
