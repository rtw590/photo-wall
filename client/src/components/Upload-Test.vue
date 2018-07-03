<template>
  <div>
    <h1>Upload a file</h1>

    <label>File
        <input type="file" id="file" ref="file" name="file" v-on:change="handleFileUpload()"/>
      </label>
        <button v-on:click="submitFile()">Submit</button>
</div>

</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      file: ""
    };
  },

  methods: {
    submitFile() {
      // Initialize the form data
      let formData = new FormData();
      // Add the form data we need to submit
      formData.append("file", this.file);
      // Make the request to the POST /single-file URL
      axios
        .post("/upload-test", file, {
          baseURL: "http://localhost:8000/"
          // headers: {
          //   "Content-Type": "multipart/form-data"
          // }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    },
    // Handles a change on the file upload
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
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
