<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              v-if="getYoutubeKey"
              :src="baseUrl + getYoutubeKey"
              :key="getMovie.id"
              :title="getMovie.title"
            ></iframe>
          </div>
          <h2 class=" mt-2 mb-4">{{ getMovie.title }}</h2>
          <p>{{ getMovie.overview }}</p>
        </div>
        <div class="col-lg-3">
          <div class="bg-white border rounded-lg p-2 h-100">
            <div class="mb-3">
              <h4>Date de sortie</h4>
              <span>{{ convertDate(getMovie.release_date) }}</span>
            </div>
            <div class="mb-3">
              <h4>Durée</h4>
              <span>{{runtime}}</span>
            </div>
            <div class="mb-3">
            <h4>Genres</h4>
              <span 
                v-for="genre in getGenres"
                :key="genre.id"
                class="badge badge-primary mr-2"
              >
                {{ genre.name }}
              </span>
            </div>
            <div class="mb-3">
              <h4>Acteurs principaux</h4>
              <span
                class="d-block"
                v-for="actor in getActors"
                :key="actor.id"
              >
                {{actor.name}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <hr />
      <h2 class="mb-4">Recommandations</h2>
      <div class="row">
        <figure 
          class="figure col-sm-6 col-lg-3"
          v-for="recommendation in getRecommendations"
          :key="recommendation.id"
        >
          <img :src="`https://image.tmdb.org/t/p/w342/${recommendation.poster_path}`" class="figure-img img-fluid rounded" :alt="recommendation.title">
          <figcaption class="figure-caption text-center">
            <a
              href="#"
              @click.prevent="seeRecommendation(recommendation.id)"
            >
              {{recommendation.title | reduceString(25)}}
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import dayjs from "dayjs";

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
    ...mapGetters(["getMovie", "getGenres", "getRecommendations", "getYoutubeKey", "getActors"]),

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
    },

    convertDate(date) {
      return dayjs(date).format("DD/MM/YYYY");
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