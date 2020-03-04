<template>
  <b-row>
    <b-col lg="6" v-for="movie in getRequest" :key="movie.id">
      <b-card no-body class="mb-5 shadow-sm hover-transition">
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
export default {
  name: "MoviesList",

  props: {
    getter: {
      type: String,
      required: true
    },
    
    request: {
      type: String,
      required: true
    }
  },

  created() {
    this.$store.dispatch(`${this.request}`, this.$route.params.keyword);
  },

  computed: {
    getRequest() {
      return this.$store.getters[`${this.getter}`];
    }
  },

  methods: {
    detailsMovie(movieId){
      this.$router.push({ name: 'movieDetails', params: { id:  movieId}});
    }
  }
};
</script>

<style lang="scss"></style>