<template>
  <b-col lg="9">
    <b-embed
      type="iframe"
      aspect="16by9"
      :src="`https://www.youtube.com/embed/${getYoutubeKey}`"
      :key="getMovie.id"
      v-if="getYoutubeKey"
    >
    </b-embed>
    <h2 class=" mt-2 mb-4">{{ getMovie.title }}</h2>
    <p>{{ getMovie.overview }}</p>
  </b-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Video",

  computed: {
    ...mapGetters(["getMovie", "getYoutubeKey"]),
  }
};
</script>

<style lang="scss"></style>