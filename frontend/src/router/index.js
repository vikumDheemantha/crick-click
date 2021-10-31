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
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      layout: "EmptyLayout",
    }
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      layout: "EmptyLayout",
    }
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
    path: "/organization/create",
    name: "Create Organization",
    component: () => import("../views/OrganizationProfileCreation.vue"),
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
  {
    path: "/organization/create-game",
    name: "Game Creation",
    component: () => import("../views/GameCreation.vue"),
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
  {
    path: "/matches/updateScore",
    name: "Score Update",
    component: () => import("../views/ScoreUpdate.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
