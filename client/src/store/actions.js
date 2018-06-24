import TestService from "@/services/TestService";

export default {
  // Put all actions here
  async GET_ALL_USERS({ commit }) {
    let users = (await TestService.index()).data;
    commit("GET_ALL_USERS", users);
  },
  async CHANGE_USERS({ commit }) {
    let users = "DogOfCats";
    commit("CHANGE_USERS", users);
  }
};
