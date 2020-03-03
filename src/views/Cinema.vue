<template>
  <b-container>
    <h1 class="mb-4 text-center">Actuellement au cinéma</h1>
    <MovieList />
  </b-container>
</template>

<script>
import MovieList from "../components/MovieList/MovieList";

export default {
  name: "cinema",

  components: {
    MovieList
  }
};
</script>

<style lang="scss"></style>