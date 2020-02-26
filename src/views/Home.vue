<template>
  <div class="container">
    <SearchBar />
    <div class="row">
      <CurrentMovie />
      <SuggestionMovie />
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar/SearchBar";
import CurrentMovie from "../components/CurrentMovie/CurrentMovie";
import SuggestionMovie from "../components/SuggestionMovie/SuggestionMovie";

export default {
  name: "home",

  components: {
    SearchBar,
    CurrentMovie,
    SuggestionMovie
  }
};
</script>

<style lang="scss"></style>
