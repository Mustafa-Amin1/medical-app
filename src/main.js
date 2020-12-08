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

//kendo UI
import '@progress/kendo-ui'
import "@progress/kendo-theme-bootstrap/dist/all.scss";
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
Vue.use(GridInstaller)

// veevalidate
// import VeeValidate from 'vee-validate';
// Vue.use(VeeValidate);

//api communication
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//style sheet
import './theme/main.scss'
// localStorage.getItem('selectedLang') == 'en' ? import('./theme/main.scss') : import('./theme/main-rtl.scss');


Vue.config.productionTip = false;


new Vue({
  router ,
  store ,
  components: {
    Grid
  },
  render: h => h(App)
}).$mount("#app");

