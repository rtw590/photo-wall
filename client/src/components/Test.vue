<template>
<div>
  <h1>Is the user logged in?</h1>
  <h2 v-if="$store.state.loggedIn">
    User is logged in
  </h2>
  <h2 v-if="!$store.state.loggedIn">
    Nope
  </h2>
</div>

</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>


<style scoped>
</style>
