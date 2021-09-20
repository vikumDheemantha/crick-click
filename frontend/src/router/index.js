import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/teammanager",
    name: "TeamManager",
    component: () => import("../views/TeamManager.vue"),
  },

  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team.vue"),
  },

  {
    path: "/player",
    name: "Player",
    component: () => import("../views/Player.vue"),
  },
  {
    path: "/matchorganizer",
    name: "Match Organizer",
    component: () =>
    import("../views/MatchOrganizer.vue"),
  },

  {
    path:"/p-profile",
    name:"p-profile",
    component: () =>
    import("../views/p-profile.vue"),
  },
  { 
    path: "/createOrganizer",
    name: "CreateOrganizer",
    
    component: () =>
    import( /* webpackChunkName: "CreateOrganizer" */ "../views/CreateOrganizer.vue"),
  }
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
