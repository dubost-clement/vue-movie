import axios from "axios";

export default {
  state: {
    actor: {},
    actorMovies: []
  },

  getters: {
    getActor: state => state.actor,
    getActorMovies: state => state.actorMovies
  },

  mutations: {
    changeActor(state, payload) {
      state.actor = payload;
      state.actorMovies = payload.movie_credits.cast.slice(0, 8);

      /*const movieByPopularity = payload.movie_credits.cast.sort((a, b) => {
        return b.popularity - a.popularity;
      });

      state.actorMovies =  movieByPopularity.slice(0, 8);*/
    }
  },

  actions: {
    actorRequest(context, actorId) {
      axios
      .get(`https://api.themoviedb.org/3/person/${actorId}?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&append_to_response=movie_credits`)
      .then(response => {
        context.commit("changeActor", response.data);
      });
    }
  }
}