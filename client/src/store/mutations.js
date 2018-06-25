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
  }
};
