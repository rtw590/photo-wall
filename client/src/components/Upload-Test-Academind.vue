<template>
  <div>
    <h1>Upload a file</h1>

    <input type="file" name="fileImage" @change="onFileSelected">
    <button @click="onUpload">Upload</button>

</div>

</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedFile: null
    };
  },

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      console.log(fd);
      axios.post("/single", fd, {
        baseURL: "http://localhost:8000/",
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
    }
  }
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
