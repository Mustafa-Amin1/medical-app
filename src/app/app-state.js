import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios'


Vue.use( Vuex );
// import { dashboardState } from '../app/dashboard/shared/state/dashboard-data.js';

export default new Vuex.Store({
  state: {
    isViewMode:false,
    isWindowClosed:false
  },
  mutations: {},
  actions: {},
  modules: {
    // dashboardState
  }
});
