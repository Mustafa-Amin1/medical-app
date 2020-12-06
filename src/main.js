import Vue from "vue";
import App from "./app/app.vue";

//router
import router from "./app/app-router.js" ;

//state management
import store from "./app/app-state";


//import bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//style sheet
import './theme/main.scss'
// localStorage.getItem('selectedLang') == 'en' ? import('./theme/main.scss') : import('./theme/main-rtl.scss');


Vue.config.productionTip = false;


new Vue({
  router ,
  store ,
  render: h => h(App)
}).$mount("#app");

