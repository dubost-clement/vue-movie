<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5 sticky-top">
  <a class="navbar-brand" href="#">vue-movie</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li 
        class="nav-item active"
        v-for="link in links"
        :key="link.name"
      >
        <router-link :to="link.path" class="nav-link">
          {{link.name}}
        </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: "NavigationBar",

  data() {
    return {
      links: [
        {
          name: "Accueil",
          path: "/"
        },
        {
          name: "Cinéma",
          path: "/cinema"
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>