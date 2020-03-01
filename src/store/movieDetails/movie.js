import axios from "axios";

export default {
  state: {
    movie: {},
    genres: [],
    recommendations: [],
    youtubeKey: "",
    actors: []
  },

  getters: {
    getMovie: state => state.movie,
    getGenres: state => state.genres,
    getRecommendations: state => state.recommendations,
    getYoutubeKey: state => state.youtubeKey,
    getActors: state => state.actors
  },

  mutations: {
    changeMovieDetails(state, payload) {
      state.movie = payload;
      state.genres = payload.genres;
      state.recommendations = payload.recommendations.results.slice(0, 4);
      if(payload.videos.results[0]) {
        state.youtubeKey = payload.videos.results[0].key;
      }
      state.actors = payload.credits.cast.slice(0, 3);
    }
  },

  actions: {
    movieRequest(context, movieId) {
      axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&append_to_response=videos,recommendations,credits`)
      .then(response => {
        context.commit("changeMovieDetails", response.data);
      });
    }
  }
}