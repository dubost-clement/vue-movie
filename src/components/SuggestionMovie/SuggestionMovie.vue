<template>
  <div class="col-md-4">
    <div
      class="card mb-5"
      style=""
      v-for="suggestion in suggestions"
      :key="suggestion.id"
    >
      <img
        class="card-img-top"
        :src="`https://image.tmdb.org/t/p/w342/${suggestion.poster_path}`"
        :alt="suggestion.title"
      />
      <div class="card-body">
        <h5 class="card-title">{{ suggestion.title }}</h5>
        <a href="#" class="btn btn-primary" @click="changeVideo(suggestion)"
          >Bande annonce</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SuggestionMovie",

  computed: {
    ...mapGetters({
      suggestions: "getMovieSuggestion",
      currentMovie: "getCurrentMovie"
    })
  },

  methods: {
    ...mapMutations(["setCurrentMovie"]),

    changeVideo(suggestion) {
      this.$store.commit("setCurrentMovie", suggestion);
      this.$store.dispatch("getVideo", this.currentMovie.id);
    }
  }
};
</script>

<style lang="scss"></style>
