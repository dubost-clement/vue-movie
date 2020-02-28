<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          :src="baseUrl + getyoutubeKey"
          :key="getMovie.id"
          title="title"
        ></iframe>
      </div>
      <h2 class="text-center">{{ getMovie.title }}</h2>
      <p>{{ getMovie.overview }}</p>
      <hr class="mt-5">
      <div>
        <h4>Genres</h4>
        <span 
          v-for="genre in getGenres"
          :key="genre.id"
          class="badge badge-secondary mr-2"
        >
          {{ genre.name }}
        </span>
        <h4>Durée</h4>
        <span>{{runtime}}</span>
      </div>
    </div>
    <div class="col-lg-4">
      <h2 class="text-center">recommendations</h2>
      <div 
        class="card mb-5"
        v-for="recommendation in getRecommendations"
        :key="recommendation.id"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              :src="`https://image.tmdb.org/t/p/w342/${recommendation.poster_path}`"
              class="card-img" 
              :alt="recommendation.title">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ recommendation.title }}</h5>
              <button 
              class="btn btn-primary"
              @click="seeRecommendation(recommendation.id)"
              >
                Bande annonce
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Details",

  data() {
    return {
      baseUrl: "https://www.youtube.com/embed/"
    }
  },

  created() {
    this.$store.dispatch("movieRequest", this.$route.params.id);
  },

  computed: {
    ...mapGetters(["getMovie", "getGenres", "getRecommendations", "getyoutubeKey"]),

    runtime() {
      const hours = Math.floor(this.getMovie.runtime / 60);
      let minutes = this.getMovie.runtime % 60;

      if(minutes < 10) {
        minutes = "0" + minutes
      }
      
      return hours + "h" + minutes
    }
  },

  methods: {
    seeRecommendation(movieId) {
      this.$router.push({ name: 'movieDetails', params: { id:  movieId}});
    }
  },

  watch: {
    "$route.params.id" : function() {
      this.$store.dispatch("movieRequest", this.$route.params.id);
    }
  }
};
</script>

<style lang="scss"></style>