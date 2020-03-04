import Vue from "vue";
import Vuex from "vuex";
import movieDetails from "./movieDetails/movie";
import search from "./searchRequest/search";
import actor from "./actor/actor";
import MovieRequest from "./movieRequest/movieRequest";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movieDetails,
    search,
    actor,
    MovieRequest
  }
});
