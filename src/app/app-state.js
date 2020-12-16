import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios'
import { dashboardState } from './dashboard';


Vue.use( Vuex );

export default new Vuex.Store({
  // state: {


  // },
  // mutations: {

  // },
  // getters: {

  // },
  // actions: {},
  modules: {
    dashboardState
  }
});
// window.onload = function () {
//   var active = document.querySelector("#routes");
//   active.classList.remove("active");
// }
