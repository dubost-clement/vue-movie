<template>
  <b-container>
    <h2 class="mb-4 center-sm">Recommandations</h2>
    <b-row>
      <figure 
        class="figure col-sm-6 col-lg-3 center-sm"
        v-for="recommendation in getRecommendations"
        :key="recommendation.id"
      >
        <img :src="`https://image.tmdb.org/t/p/w342/${recommendation.poster_path}`" class="figure-img img-fluid rounded" :alt="recommendation.title">
        <figcaption class="figure-caption text-center">
          <b-link href="#foo" @click.prevent="seeRecommendation(recommendation.id)">
            {{recommendation.title | reduceString(25)}}
          </b-link>
        </figcaption>
      </figure>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Suggestions",

  computed: {
    ...mapGetters(["getRecommendations"])
  },

  methods: {
    seeRecommendation(movieId) {
      this.$router.push({ name: 'movieDetails', params: { id:  movieId}});
    }
  }
};
</script>

<style lang="scss"></style>