import Vue from "vue";
import Vuex from "vuex";
import movieDetails from "./movieDetails/movie";
import search from "./searchRequest/search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movieDetails,
    search
  }
});
