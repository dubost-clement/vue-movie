<template>
  <div>
    <ActorDetails />
    <ActorMovies />
  </div>
</template>

<script>
import ActorDetails from "../components/Actor/ActorDetails";
import ActorMovies from "../components/Actor/ActorMovies";

export default {
  name: "actor",

  components: {
    ActorDetails,
    ActorMovies
  }
};
</script>

<style lang="scss"></style>