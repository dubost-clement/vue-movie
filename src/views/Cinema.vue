<template>
  <b-container>
    <SearchBar />
    <h1 class="mb-4 text-center">Actuellement au cinéma</h1>
    <MoviesList getter="getCinema" request="cinemaRequest" />
  </b-container>
</template>

<script>
import SearchBar from "../components/SearchBar/SearchBar";
import MoviesList from "../components/MovieList/MoviesList";

export default {
  name: "cinema",

  components: {
    SearchBar,
    MoviesList
  }
};
</script>

<style lang="scss"></style>