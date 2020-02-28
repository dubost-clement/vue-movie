<template>
  <div id="app" class="bg-light">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  name: "App",

  components: {
    NavigationBar,
  }
};
</script>

<style lang="scss"></style>
