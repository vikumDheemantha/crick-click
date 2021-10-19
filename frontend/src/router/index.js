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

  // organizer content
  {
    path: "/organizer/manage",
    name: "Match Organizer",
    component: () => import("../views/MatchOrganizer.vue"),
  },
  {
    path: "/organization/my-organization",
    name: "Match Organizer",
    component: () => import("../views/OrganizerProfileView.vue"),
  },
  // player content
  {
    path: "/player/create",
    name: "p-profile",
    component: () => import("../views/p-profile.vue"),
  },
  {
    path: "/player/my-profile",
    name: "player-profile",
    component: () => import("../views/PlayerProfileView.vue"),
  },
  {
    path: "/player/search",
    name: "player-search",
    component: () => import("../views/PlayerProfileView.vue"),
  },
  {
    path: "/organizer-profile",
    name: "organizer-profile",
    component: () => import("../views/PlayerProfileView.vue"),
  },
  {
    path: "/createOrganizer",
    name: "CreateOrganizer",

    component: () =>
      import(
        /* webpackChunkName: "CreateOrganizer" */ "../views/CreateOrganizer.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
