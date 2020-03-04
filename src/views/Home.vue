<template>
  <b-container>
    <SearchBar />
    <h1 class="text-center mb-4">Films populaires du moments</h1>
    <MoviesList getter="getPopular" request="popularRequest" />
  </b-container>
</template>

<script>
import SearchBar from "../components/SearchBar/SearchBar";
import MoviesList from "../components/MovieList/MoviesList";

export default {
  name: "home",

  components: {
    SearchBar,
    MoviesList
  }
};
</script>

<style lang="scss"></style>
