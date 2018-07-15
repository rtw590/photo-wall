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
    state.posts = cardChunks;
  },
  CLEAR_POSTS(state) {
    state.posts = [];
  },
  GET_POST(state, singlePost) {
    state.post = singlePost;
  },
  SET_LOGGED_IN_USER(state, loggedInUser) {
    state.user = loggedInUser;
    state.loggedIn = true;
  },
  LOGOUT(state) {
    state.user = {};
    state.loggedIn = false;
  },
  VIEW_POST(state, singlePost) {
    state.post = singlePost;
  }
};
