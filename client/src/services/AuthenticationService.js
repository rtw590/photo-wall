import Api from "@/services/Api";

export default {
  // You can call this function in other files by using AuthenticationService.register
  register(credentials) {
    return Api().post("register", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  }
};
