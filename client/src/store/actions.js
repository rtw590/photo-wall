import Posts from "@/services/Posts";

// Actions call mutations but handle the async parts
// Can receive a payload passed in from the component
// Can have same name as the mutation

export default {
  async GET_POSTS({ commit }) {
    let posts = (await Posts.index()).data;
    let cardChunks = [];
      let chunkSize = 3;
      for (let i = 0; i < posts.length; i += chunkSize) {
        cardChunks.push(posts.slice(i, i + chunkSize));
      }
    commit("GET_POSTS", cardChunks);
  },
  SET_LOGGED_IN_USER({ commit }, user) {
    let loggedInUser = user;
    commit("SET_LOGGED_IN_USER", loggedInUser);
  },
  LOGOUT({ commit }) {
    commit("LOGOUT");
  }
};
