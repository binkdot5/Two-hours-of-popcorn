import Vue from "vue";
import VueRouter from "vue-router";
import MovieList from "../views/movie-list.vue";
import Movie from "../views/movie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/movies"
  },
  {
    path: "/movies",
    component: MovieList
  },
  {
    path: "/movie/:id",
    component: Movie
  }
];

const router = new VueRouter({
  routes
});

export default router;
