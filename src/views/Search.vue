<template>
  <div class="container">
    <h1>Résultat</h1>
    <SearchBar />
    <div class="row">
    <div class="col-12" v-for="result in getRequest" :key="result.id">
      <div class="card mb-5">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="`https://image.tmdb.org/t/p/w342/${result.poster_path}`" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ result.title }}</h5>
              <p class="card-text">{{ result.overview | reduceString(150) }}</p>
              <button class="btn btn-primary" @click="detailsMovie(result.id)">plus d'infos</button>
              <p class="card-text"><small class="text-muted">Date de sortie {{ convertDate(result.release_date) }}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>   
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar/SearchBar";
import { mapGetters } from "vuex";
import dayjs from "dayjs";

export default {
  name: "search",

  components: {
    SearchBar
  },

  data() {
    return {
      movieResults: []
    }
  },

  created() {
    this.$store.dispatch("searchRequest", this.$route.params.keyword);
  },

  methods: {
    convertDate(date) {
      return dayjs(date).format("DD/MM/YYYY");
    },

    detailsMovie(movieId){
      this.$router.push({ name: 'movieDetails', params: { id:  movieId}});
      this.$store.dispatch("movieRequest", movieId);
    }
  },

  computed: {
    ...mapGetters(["getRequest"])
  }
};
</script>

<style lang="scss"></style>