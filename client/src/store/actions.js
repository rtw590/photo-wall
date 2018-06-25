import TestService from "@/services/TestService";

// Actions call mutations but handle the async parts
// Can receive a payload passed in from the component
// Can have same name as the mutation

export default {
  async GET_ALL_USERS({ commit }) {
    let users = (await TestService.index()).data;
    commit("GET_ALL_USERS", users);
  },
  CHANGE_USERS({ commit }) {
    let users = {
      user: "DogOfCats"
    };
    commit("CHANGE_USERS", users);
  }
};
