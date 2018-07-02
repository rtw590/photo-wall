import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home.vue";
import Test from "./components/Test.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Upload from "./components/Upload.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/test",
      name: "test",
      component: Test
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload
    }
  ]
});
