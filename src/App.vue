<template>
  <div id="app">
    <NavigationBar />
    <router-view />
    
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
/*import SearchBar from "./components/SearchBar/SearchBar";
import CurrentMovie from "./components/CurrentMovie/CurrentMovie";
import SuggestionMovie from "./components/SuggestionMovie/SuggestionMovie";*/

export default {
  name: "App",

  components: {
    NavigationBar,
    //SearchBar,
    //CurrentMovie,
    //SuggestionMovie
  },

  created() {
    this.$store.dispatch("initialMovieData");
  }
};
</script>

<style lang="scss"></style>
