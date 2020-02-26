<template>
  <div class="">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        :src="`${baseUrl}${youtubeKey}`"
        title="title"
      ></iframe>
    </div>
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.overview }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Details",

  data() {
    return {
      movie: {},
      youtubeKey: "",
      baseUrl: "https://www.youtube.com/embed/"
    }
  },

  created() {
    axios
      .get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=5692bf3d64e2467087e0ab1a404449e9&language=fr-FR&append_to_response=videos`)
      .then(response => {
        this.movie = response.data;
        this.youtubeKey = response.data.videos.results[0].key;
      });
  }
};
</script>

<style lang="scss"></style>