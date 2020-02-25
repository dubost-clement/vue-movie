<template>
  <div class="col-md-8 border">
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CurrentMovie",

  data() {
    return {
      baseUrl: "https://www.youtube.com/embed/"
    };
  },

  computed: {
    ...mapGetters(["getCurrentMovie", "getYoutubeVideoId"])
  }
};
</script>

<style lang="scss"></style>
