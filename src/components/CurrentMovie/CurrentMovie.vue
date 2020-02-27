<template>
  <div class="col-md-8">
    <div class="border">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        :src="`${baseUrl}${getYoutubeVideoId}`"
        title="title"
      ></iframe>
    </div>
    <div class="description mt-5">
      <h2>{{ getCurrentMovie.title }}</h2>
      <p>{{ getCurrentMovie.overview }}</p>
      <p>date de sortie: {{ convertDate }}</p>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import dayjs from "dayjs";

export default {
  name: "CurrentMovie",

  data() {
    return {
      baseUrl: "https://www.youtube.com/embed/"
    };
  },

  computed: {
    ...mapGetters(["getCurrentMovie", "getYoutubeVideoId"]),

    convertDate() {
      return dayjs(this.getCurrentMovie.release_date).format("DD/MM/YYYY");
    }
  },

  destroyed() {
    this.$store.dispatch("initialMovieData");
  }
};
</script>

<style lang="scss"></style>
