<template>
  <form @submit.prevent="searchMovie">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="recherchez un film"
        aria-label="recherchez un film"
        aria-describedby="button-addon2"
        v-model="movieName"
      />
      <div class="input-group-append">
        <button class="btn btn-secondary" id="button-addon2">
          Rechercher
        </button>
      </div>
    </div>
  </form>
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
