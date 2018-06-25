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
    loggedIn: false,
    posts: {}
  },
  // I've imported the getters, mutations, and actions from 3 other files
  getters,
  mutations,
  actions
});
