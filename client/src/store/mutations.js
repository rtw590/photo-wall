// Mutations are methods that change the state directly, must be synchronous
// Can receive payload passed in from component or from action?

export default {
  // Put all mutations here
  // First pass in the state and then we are receiving users from the action
  GET_ALL_USERS(state, users) {
    state.users = users;
  },
  CHANGE_USERS(state, users) {
    state.users = users;
  },
  GET_POSTS(state, cardChunks) {
    state.loading = false;
    state.posts = cardChunks;
  },
  CLEAR_POSTS(state) {
    state.posts = [];
  },
  CLEAR_POST(state) {
    state.post = {};
  },
  GET_POST(state, singlePost) {
    state.loading = false;
    state.post = singlePost;
  },
  // LIKE_POST(state, postId) {
  //   console.log("Like post ran in mutation");
  //   console.log(postId);
  // },
  SET_LOGGED_IN_USER(state, loggedInUser) {
    state.user = loggedInUser;
    state.loggedIn = true;
  },
  LOGOUT(state) {
    state.user = {};
    state.loggedIn = false;
  },
  VIEW_POST(state, singlePost) {
    state.loading = false;
    state.post = singlePost;
  },
  LOADING_TRUE(state) {
    state.loading = true;
  },
  LOADING_FALSE(state) {
    state.loading = false;
  }
};
