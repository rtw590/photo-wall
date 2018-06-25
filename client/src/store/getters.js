// Getters are used in component's methods to get some information from the state rather than getting directly from the state
// Why? Because this code can be re-used throughout components
// It always returns something

export default {
  ALL_USERS(state) {
    return state.users;
  },
  LOGGED_IN(state) {
    return state.loggedIn;
  }
};
