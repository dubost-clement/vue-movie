<template>
  <b-container class="container">
    <h1>Résultat</h1>
    <SearchBar />
    <b-row>
      <b-col lg="6" v-for="result in getRequest" :key="result.id">
        <b-card no-body class="mb-5 shadow-sm hover-transition">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img
                v-if="result.poster_path"
                :src="`https://image.tmdb.org/t/p/w342/${result.poster_path}`" 
                :alt="result.title"
              >
              </b-card-img>
              <b-card-img
                v-else
                src="https://via.placeholder.com/342x513.jpg" 
                alt="pas d'image d'illustration pour ce film"
              >
              </b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body class="d-flex flex-column justify-content-around h-100">
                <h2 class="h5">{{ result.title | reduceString(25)}}</h2>
                <b-card-text>{{ result.overview | reduceString(125) }}</b-card-text>
                <div>
                  <b-button variant="primary" @click="detailsMovie(result.id)">Plus d'infos</b-button>
                </div>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SearchBar from "../components/SearchBar/SearchBar";
import { mapGetters } from "vuex";

export default {
  name: "search",

  components: {
    SearchBar,
  },

  created() {
    this.$store.dispatch("searchRequest", this.$route.params.keyword);
  },

  methods: {
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