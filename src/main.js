import Vue from "vue";
import App from "./app/app.vue";
import router from "./app/app-router.js" ;
// import Router from "../src/app/app-router";
import store from "./app/app-state";

Vue.config.productionTip = false;


new Vue({
  router ,
  store ,
  render: h => h(App)
}).$mount("#app");

