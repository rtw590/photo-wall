import Api from "@/services/Api";

export default {
  // You can call this function in other files by using UploadService.upload
  upload(file) {
    console.log("upload service ran");
    console.log(file);
    return Api().post("upload", file);
  }
};
