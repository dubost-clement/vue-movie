<template>
  <b-form @submit.prevent="searchMovie" class="mb-5">
    <b-input-group>
      <b-form-input 
        v-model="movieName"
        placeholder="Recherchez un film"
      ></b-form-input>
      <b-input-group-append>
        <b-button type="submit" variant="primary">Rechercher</b-button>
      </b-input-group-append>
    </b-input-group>
  </b-form>
</template>

<script>
export default {
  name: "SearchBar",

  data() {
    return {
      movieName: ""
    };
  },

  methods: {
    searchMovie() {
      this.$router.push({ name: 'search', params: { keyword:  this.movieName}});
    }
  }
};
</script>

<style lang="scss"></style>
