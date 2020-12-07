import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../app/shared/components/home/home.vue";
import Dashboard from "../app/dashboard/dashboard-routes";

Vue.use(VueRouter);


const appRoutes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
  
   
]
const routes = [ ...appRoutes, ...Dashboard];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});


export default router;
