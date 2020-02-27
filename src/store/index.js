import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import movieDetails from "./movieDetails/movie";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movieDetails
  },

  state: {
    currentMovie: {},
    movieSuggestion: [],
    youtubeVideoId: ""
  },

  mutations: {
    setCurrentMovie(state, payload) {
      state.currentMovie = payload;
    },

    setMovieSuggestion(state, payload) {
      state.movieSuggestion = payload;
    },

    setYoutubeVideoId(state, payload) {
      state.youtubeVideoId = payload;
    }
  },

  getters: {
    getCurrentMovie: state => state.currentMovie,
    getMovieSuggestion: state => state.movieSuggestion,
    getYoutubeVideoId: state => state.youtubeVideoId
  },

  actions: {
    initialMovieData(context) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=5692bf3d64e2467087e0ab1a404449e9&sort_by=popularity.desc&language=fr&include_adult=false`
        )
        .then(response => {
          context.commit("setCurrentMovie", response.data.results[0]);
          context.commit(
            "setMovieSuggestion",
            response.data.results.slice(1, 5)
          );
          context.dispatch("getVideo", context.getters.getCurrentMovie.id);
        });
    },

    getVideo(context, movieId) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr&append_to_response=videos`
        )
        .then(response => {
          context.commit(
            "setYoutubeVideoId",
            response.data.videos.results[0].key
          );
        });
    },

    searchMovie(context, movieName) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&query=${movieName}&page=1&include_adult=false`
        )
        .then(response => {
          context.commit("setCurrentMovie", response.data.results[0]);
          context.dispatch("getVideo", context.getters.getCurrentMovie.id);
          context.dispatch("changeRecommendation", context.getters.getCurrentMovie.id)
        });
    },

    changeRecommendation(context, movieId) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&page=1`
        )
        .then(response => {
          context.commit("setMovieSuggestion", response.data.results.slice(0, 4));
        });
    }
  }
});
