import axios from "axios";

export default {
  state: {
    actor: {}
  },

  getters: {
    getActor: state => state.actor,
  },

  mutations: {
    changeActor(state, payload) {
      state.actor = payload;
    }
  },

  actions: {
    actorRequest(context, actorId) {
      axios
      .get(`https://api.themoviedb.org/3/person/${actorId}?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR`)
      .then(response => {
        context.commit("changeActor", response.data);
      });
    }
  }
}