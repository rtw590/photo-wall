// The store will have the global state for the app
import Vue from "vue";
import Vuex from "vuex";

// Bring in getters, mutations, and actions
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

// Tell Vue to use Vuex
Vue.use(Vuex);

// Create the store
export default new Vuex.Store({
  // In state, set the items that will be needed throughout the app
  state: {
    users: {},
    loggedIn: false
  },
  getters,
  // Getters are used in component's methods to get some information from the state rather than getting directly from the state
  // Why? Because this code can be re-used throughout components
  // It always returns something
  mutations,
  // Mutations are methods that change the state directly, must be synchronous
  // Can receive payload passed in from component or from action?
  actions
  // Actions call mutations but handle the async parts
  // Can receive a payload passed in from the component
  // Can have same name as the mutation
});
