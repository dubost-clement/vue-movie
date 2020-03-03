<template>
  <b-container>
    <b-row>
      <Video />
      <VideoDetails />
    </b-row>
    <b-row>
      <Suggestions />
    </b-row>
  </b-container>
</template>

<script>
import Video from "../components/MovieDetails/Video";
import VideoDetails from "../components/MovieDetails/VideoDetails";
import Suggestions from "../components/MovieDetails/Suggestions";

export default {
  name: "movieDetails",

  components: {
    Video,
    VideoDetails,
    Suggestions
  },

  created() {
    this.$store.dispatch("movieRequest", this.$route.params.id);
  },

  watch: {
    "$route.params.id" : function() {
      this.$store.dispatch("movieRequest", this.$route.params.id);
    }
  }
};
</script>

<style lang="scss"></style>