import Api from "@/services/Api";

export default {
  // You can call this function in other files by using TestService.index
  index() {
    return Api().get("posts");
  },
  singlePost(postId) {
    return Api().get(`post/${postId}`);
  },
  like(postId, userId) {
    return Api().get(`like/${postId}/${userId}`);
  },
  postComment(postDetails) {
    return Api().post("postComment", postDetails);
  }
};
