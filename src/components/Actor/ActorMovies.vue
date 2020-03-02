<template>
  <div class="container">
    <h2 class="mb-4">Ses films</h2>
    <div class="row">
      <figure 
        class="figure col-sm-6 col-lg-3"
        v-for="actorMovie in getActorMovies"
        :key="actorMovie.id"
      >
        <img :src="`https://image.tmdb.org/t/p/w342/${actorMovie.poster_path}`" class="figure-img img-fluid rounded" :alt="actorMovie.title">
        <figcaption class="figure-caption text-center">
          <a
            href="#"
            @click.prevent="seeMovie(actorMovie.id)"
          >
            {{actorMovie.title | reduceString(25)}}
          </a>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "actorMovies",

  computed: {
    ...mapGetters(["getActorMovies"])
  },

  methods: {
    seeMovie(movieId) {
      this.$router.push({ name: 'movieDetails', params: { id:  movieId}});
    }
  }
}
</script>

<style lang="scss">
figure {
  @media screen and (max-width: 576px) {
    text-align: center
  }
}
</style>