import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home.vue";
import Test from "./components/Test.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Upload from "./components/Upload.vue";
import UploadTest from "./components/Upload-Test.vue";
import UploadTestAcademind from "./components/Upload-Test-Academind.vue";
import Feed from "./components/Feed.vue";
import FeedWIP from "./components/FeedWIP.vue";

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
    },
    {
      path: "/upload-test",
      name: "upload-test",
      component: UploadTest
    },
    {
      path: "/upload-test-academind",
      name: "upload-test-academind",
      component: UploadTestAcademind
    },
    {
      path: "/feed",
      name: "feed",
      component: Feed
    },
    {
      path: "/feedWIP",
      name: "feedWIP",
      component: FeedWIP
    }
  ]
});
