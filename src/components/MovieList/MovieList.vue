<template>
  <b-row>
    <b-col lg="6" v-for="movie in movieList" :key="movie.id">
      <b-card no-body class="mb-5 shadow-sm">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img 
              :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" 
              :alt="movie.title"
            >
            </b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body class="d-flex flex-column justify-content-around h-100">
              <h2 class="h5">{{ movie.title | reduceString(25)}}</h2>
              <b-card-text>{{ movie.overview | reduceString(125) }}</b-card-text>
              <div>
                <b-button variant="primary" @click="detailsMovie(movie.id)">Plus d'infos</b-button>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>   
</template>

<script>
import axios from "axios";

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
    detailsMovie(movieId){
      this.$router.push({ name: 'movieDetails', params: { id:  movieId}});
    }
  }
};
</script>

<style lang="scss"></style>