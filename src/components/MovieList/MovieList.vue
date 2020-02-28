<template>
  <div class="row">
    <div class="col-12 col-lg-6" v-for="movie in movieList" :key="movie.id">
      <div class="card mb-5 shadow-sm">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body d-flex flex-column justify-content-center h-100">
              <h2 class="card-title h5">{{ movie.title | reduceString(25)}}</h2>
              <p class="card-text">{{ movie.overview | reduceString(150) }}</p>
              <p class="card-text"><small class="text-muted">Date de sortie {{ convertDate(movie.release_date) }}</small></p>
              <div>
                <button class="btn btn-primary" @click="detailsMovie(movie.id)">plus d'infos</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>   
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";

export default {
  name: "MovieList",

  data() {
    return {
      movieList: []
    }
  },

  created() {
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&page=1&region=FR")
      .then(response => {
        this.movieList = response.data.results;
      });
  },

  methods: {
    convertDate(date) {
      return dayjs(date).format("DD/MM/YYYY");
    },

    detailsMovie(movieId){
      this.$router.push({ name: 'movieDetails', params: { id:  movieId}});
    }
  }
};
</script>

<style lang="scss"></style>