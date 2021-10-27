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

  // Team related routs
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
    path: "/team/create",
    name: "Team Creation",
    component: () => import("../views/TeamProfileCreation.vue"),
  },

  {
    path: "/teams",
    name: "Teams",
    component: () => import("../views/TeamList.vue"),
  },

  {
    path: "/teams/profile/1",
    name: "Team Profile",
    component: () => import("../views/TeamProfileView.vue"),
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
  {
    path: "/organizations",
    name: "Organization List",
    component: () => import("../views/OrganizationList.vue"),
  },
  // player content
  {
    path: "/player/create",
    name: "Player Profile Cretion",
    component: () => import("../views/PlayerProfileCreation.vue"),
  },
  {
    path: "/player/my-profile",
    name: "player-profile",
    component: () => import("../views/PlayerProfileView.vue"),
  },
  {
    path: "/players",
    name: "player-list",
    component: () => import("../views/PlayerList.vue"),
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

  // Match related routs

  {
    path: "/matches/list",
    name: "Match List",
    component: () => import("../views/MatchSearchView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
