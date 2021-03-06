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
  CLEAR_POST({ commit }) {
    commit("CLEAR_POST");
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
  // LIKE_POST({ commit }, postId) {
  //   console.log("Like post in action ran");
  //   console.log(postId);
  //   commit("LIKE_POST", postId);
  // },
  async VIEW_POST({ commit }, postId) {
    console.log(`This is in action and this is the postId ${postId}`);
    let singlePost = (await Posts.singlePost(postId)).data;
    console.log(`This is in action and this is singlePost ${singlePost}`);
    // let singlePost = await postId;
    commit("VIEW_POST", singlePost);
  },
  LOADING_TRUE({ commit }) {
    commit("LOADING_TRUE");
  },
  async GET_PROFILE({ commit }, profileInformation) {
    let username = profileInformation.username;
    let loggedInUsername = profileInformation.loggedInUsername;
    let profile = (await Posts.profile(username, loggedInUsername)).data;
    let cardChunks = [];
    let chunkSize = 4;
    for (let i = 0; i < profile.length; i += chunkSize) {
      cardChunks.push(profile.slice(i, i + chunkSize));
    }
    commit("GET_PROFILE", cardChunks);
  },
  CLEAR_PROFILE({ commit }) {
    commit("CLEAR_PROFILE");
  },
  CHANGE_FOLLOWING({ commit }, following) {
    let followingOrNot = following;
    commit("CHANGE_FOLLOWING", followingOrNot);
  },
  CLEAR_FOLLOWING({ commit }) {
    commit("CLEAR_FOLLOWING");
  },
  CLEAR_FOLLOWERS({ commit }) {
    commit("CLEAR_FOLLOWERS");
  },
  async GET_FOLLOWERS({ commit }, bothUsers) {
    let pageOn = bothUsers.pageOn;
    let username = bothUsers.username;
    let followers = (await Posts.followers(pageOn, username)).data;
    commit("GET_FOLLOWERS", followers);
  }
};
