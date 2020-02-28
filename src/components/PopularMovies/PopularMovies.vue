<template>
  <div class="popular-movies">
    <h1 class="text-center mb-4">Les films populaires du moments</h1>
    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="movie in popularMovies" :key="movie.id">
        <div class="card mb-5 shadow-sm">
          <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" class="card-img-top" :alt="movie.title">
          <div class="card-body text-center">
            <h2 class="card-title h6">{{movie.title | reduceString(25)}}</h2>
            <button class="btn btn-primary" @click="detailsMovie(movie.id)">plus d'infos</button>           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "popularMovies",

  data() {
    return{
      popularMovies: []
    }
  },
  
  created() {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&page=1&region=FR")
      .then(response => {
        this.popularMovies = response.data.results.slice(0, 12);
      });
  },

  methods: {
    detailsMovie(movieId) {
      this.$router.push({ name: 'movieDetails', params: { id:  movieId}});
    }
  }
}
</script>

<style lang="scss">

</style>