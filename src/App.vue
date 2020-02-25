<template>
  <div id="app">
    <div class="container">
      <SearchBar />
      <div class="row">
        <CurrentMovie />
        <SuggestionMovie />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar/SearchBar";
import CurrentMovie from "./components/CurrentMovie/CurrentMovie";
import SuggestionMovie from "./components/SuggestionMovie/SuggestionMovie";

export default {
  name: "App",

  components: {
    SearchBar,
    CurrentMovie,
    SuggestionMovie
  },

  created() {
    this.$store.dispatch("initialMovieData");
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
