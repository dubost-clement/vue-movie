<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          :src="`${baseUrl}${youtubeKey}`"
          title="title"
        ></iframe>
      </div>
      <h2 class="text-center">{{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
      <hr class="mt-5">
      <div>
        <h4>Genres</h4>
        <span 
          v-for="genre in genres" 
          :key="genre.id"
          class="badge badge-secondary mr-2"
        >
          {{ genre.name }}
        </span>
      </div>
    </div>
    <div class="col-lg-4">
      <h2 class="text-center">recommendations</h2>
      <div 
        class="card mb-5"
        v-for="recommendation in recommendations"
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
              <a 
              href="#"
              class="btn btn-primary"
              >
                Bande annonce
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Details",

  data() {
    return {
      movie: {},
      genres: [],
      recommendations: {},
      youtubeKey: "",
      baseUrl: "https://www.youtube.com/embed/"
    }
  },

  created() {
    axios
      .get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&append_to_response=videos,recommendations`)
      .then(response => {
        this.movie = response.data;
        this.youtubeKey = response.data.videos.results[0].key;
        this.genres = response.data.genres;
        this.recommendations = response.data.recommendations.results.slice(0, 3);
      });
  }
};
</script>

<style lang="scss"></style>