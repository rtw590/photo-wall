// What is main.js and what is it used for?

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { sync } from "vuex-router-sync";
import store from "./store/store";

// Bring in Vuetify for layout/styling
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

// Tell Vue to use vuetify
Vue.use(Vuetify);

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
