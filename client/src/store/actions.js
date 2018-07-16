import Posts from "@/services/Posts";

// Actions call mutations but handle the async parts
// Can receive a payload passed in from the component
// Can have same name as the mutation

export default {
  async GET_POSTS({ commit }) {
    let posts = (await Posts.index()).data;
    let cardChunks = [];
    let chunkSize = 4;
    for (let i = 0; i < posts.length; i += chunkSize) {
      cardChunks.push(posts.slice(i, i + chunkSize));
    }
    commit("GET_POSTS", cardChunks);
  },
  CLEAR_POSTS({ commit }) {
    commit("CLEAR_POSTS");
  },
  SET_LOGGED_IN_USER({ commit }, user) {
    let loggedInUser = user;
    commit("SET_LOGGED_IN_USER", loggedInUser);
  },
  LOGOUT({ commit }) {
    commit("LOGOUT");
  },
  GET_POST({ commit }) {
    // let singlePost = (await Posts.singlePost(postId)).data;
    let singlePost = { title: cat, user: bigCat };
    commit("GET_POST", singlePost);
  },
  async VIEW_POST({ commit }, postId) {
    console.log(`This is in action and this is the postId ${postId}`);
    let singlePost = (await Posts.singlePost(postId)).data;
    console.log(`This is in action and this is singlePost ${singlePost}`);
    // let singlePost = await postId;
    commit("VIEW_POST", singlePost);
  }
};
