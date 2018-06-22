<template>
  <div>
    <h1>Homepage</h1>
    <h2>{{user.user}}</h2>
  </div>
</template>

<script>
import TestService from "@/services/TestService";
export default {
  data() {
    return {
      user: ""
    };
  },
  async mounted() {
    //  request backnd for all the songs
    this.user = (await TestService.index()).data;
  }
};
</script>


<style scoped>
</style>
