import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Cinema from "../views/Cinema";
import MovieDetails from "../views/MovieDetails";
import Search from "../views/Search";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/cinema",
    name: "cinema",
    component: Cinema
  },

  {
    path: "/movie/:id",
    name: "movieDetails",
    component: MovieDetails
  },

  {
    path: "/search/movie/:keyword",
    name: "search",
    component: Search
  },
];

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history",
  routes
});

export default router;