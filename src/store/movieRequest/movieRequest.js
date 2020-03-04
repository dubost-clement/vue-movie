import axios from "axios";

export default {
  state: {
    popularMovie: {},
    cinemaMovie: {}
  },

  getters: {
    getPopular: state => state.popularMovie,
    getCinema: state => state.cinemaMovie
  },

  mutations: {
    changePopular(state, payload) {
      state.popularMovie = payload.slice(0, 24);
    },

    changeCinema(state, payload) {
      state.cinemaMovie = payload;
    }
  },

  actions: {
    popularRequest(context) {
      axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&page=1&region=FR")
      .then(response => {
        context.commit("changePopular", response.data.results);
      });
    },

    cinemaRequest(context) {
      axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&page=1&region=FR")
      .then(response => {
        context.commit("changeCinema", response.data.results);
      });
    }
  }
}