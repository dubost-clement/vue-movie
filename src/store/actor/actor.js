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
    },

    actorInMovie(state, payload) {
      state.actorMovies = payload.slice(0, 8);
    }
  },

  actions: {
    actorRequest(context, actorId) {
      axios
      .get(`https://api.themoviedb.org/3/person/${actorId}?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR`)
      .then(response => {
        context.commit("changeActor", response.data);
      });

      axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=${actorId}`)
      .then(response => {
        context.commit("actorInMovie", response.data.results);
      });
    }
  }
}