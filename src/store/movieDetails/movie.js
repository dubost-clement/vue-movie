import axios from "axios";

export default {
  state: {
    movie: {},
    genres: [],
    recommendations: [],
    youtubeKey: ""
  },

  getters: {
    getMovie: state => state.movie,
    getGenres: state => state.genres,
    getRecommendations: state => state.recommendations,
    getyoutubeKey: state => state.youtubeKey
  },

  mutations: {
    changeMovieDetails(state, payload) {
      state.movie = payload;
      state.genres = payload.genres;
      state.recommendations = payload.recommendations.results.slice(0, 3);
      state.youtubeKey = payload.videos.results[0].key;
    }
  },

  actions: {
    movieRequest(context, movieId) {
      axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&append_to_response=videos,recommendations`)
      .then(response => {
        context.commit("changeMovieDetails", response.data);
      });
    }
  }
}