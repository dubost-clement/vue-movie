import axios from "axios";

export default {
  state: {
    request: []
  },

  getters: {
    getRequest: state => state.request,
  },

  mutations: {
    changeRequest(state, payload) {
      state.request = payload;
    }
  },

  actions: {
    searchRequest(context, movie) {
      axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&query=${movie}&page=1&include_adult=false&region=FR`)
      .then(response => {
        context.commit("changeRequest", response.data.results);
      })
    }
  }
}