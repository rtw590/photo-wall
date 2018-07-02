<template>
  <div>
    <h1>Upload a file</h1>

    <form method="post" enctype="multipart/form-data" action="/upload">
      <label for="file">Upload a file</label>
      <input type="file" name="upload">
        <input type="submit" class="button" value="Upload Image">
    </form>
</div>

</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>


<style scoped>
input {
  display: block;
  margin: 5px 0;
}

.button {
  background-color: blue;
  color: white;
  padding: 5px;
}
</style>
