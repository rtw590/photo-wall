import Api from "@/services/Api";

export default {
  // You can call this function in other files by using TestService.index
  index() {
    return Api().get("posts");
  }
};
