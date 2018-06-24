export default {
  // Put all mutations here
  GET_ALL_USERS(state, users) {
    state.users = users;
  },
  CHANGE_USERS(state, users) {
    state.users = users;
  }
};
