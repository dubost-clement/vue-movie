<template>
  <div class="container">
    <h1>Résultat</h1>
    <SearchBar />
    <div class="row">
    <div class="col-12 col-lg-6" v-for="result in getRequest" :key="result.id">
      <div class="card mb-5 shadow-sm">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img 
              v-if="result.poster_path"
              :src="`https://image.tmdb.org/t/p/w342/${result.poster_path}`"
              alt="..."
              class="card-img" 
            >
            <img 
              v-else
              src="https://via.placeholder.com/342x513.jpg"
              alt="..."
              class="card-img" 
            >
          </div>
          <div class="col-md-8">
            <div class="card-body d-flex flex-column justify-content-center h-100">
              <h2 class="card-title h5">{{ result.title | reduceString(25)}}</h2>
              <p class="card-text">{{ result.overview | reduceString(150) }}</p>
              <p class="card-text"><small class="text-muted">Date de sortie {{ convertDate(result.release_date) }}</small></p>
              <div>
                <button class="btn btn-primary" @click="detailsMovie(result.id)">plus d'infos</button>
              </div>
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
    }
  },

  computed: {
    ...mapGetters(["getRequest"])
  },

  watch: {
    "$route.params.keyword" : function() {
      this.$store.dispatch("searchRequest", this.$route.params.keyword);
    }
  }
};
</script>

<style lang="scss"></style>