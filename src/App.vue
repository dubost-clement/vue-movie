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

<style lang="scss">
.center-sm {
  @media screen and (max-width: 576px) {
    text-align: center
  }
}

.center-md {
  @media screen and (max-width: 768px) {
    text-align: center
  }
}

.hover-transition{
  transition: .4s;
  &:hover {
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
}
</style>
