import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Regis from "../views/Register.vue"
// ประกาศ Axios
// import VueAxios from "vue-axios";
// import axios from "axios";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/Login",
    name:"Login",
    component:Login
  },
  {
    path:"/Regis",
    name:"Register",
    component:Regis
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
