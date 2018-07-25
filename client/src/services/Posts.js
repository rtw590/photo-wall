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
  },
  profile(username, loggedInUsername) {
    return Api().get(`profile/${username}/${loggedInUsername}`);
  },
  followingOrNot(username, loggedInUsername) {
    return Api().get(`followingOrNot/${username}/${loggedInUsername}`);
  },
  follow(pageOn, userId) {
    return Api().get(`follow/${pageOn}/${userId}`);
  }
};
