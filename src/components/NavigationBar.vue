<template>
  <b-navbar 
    toggleable="md"
    type="dark"
    variant="dark"
    :sticky="true"
    class="mb-5"
  >
    <b-navbar-brand href="#">Vue-Movie</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          :to="link.path"
          v-for="link in links"
          :key="link.name"
        >
          {{link.name}}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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