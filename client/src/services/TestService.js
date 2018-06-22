import Api from "@/services/Api";

export default {
  // You can call this function in other files by using SongsService.index
  index() {
    return Api().get("test");
  },
  test() {
    return Api().get("test");
  }
};
