<template>
  <b-container>
    <SearchBar />
    <PopularMovies />
  </b-container>
</template>

<script>
import SearchBar from "../components/SearchBar/SearchBar";
import PopularMovies from "../components/PopularMovies/PopularMovies";

export default {
  name: "home",

  components: {
    SearchBar,
    PopularMovies
  }
};
</script>

<style lang="scss"></style>
