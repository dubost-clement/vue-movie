<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 center-md">
        <img
          class="img-fluid"
          :src="`https://image.tmdb.org/t/p/w342/${getActor.profile_path}`"
          alt="">
      </div>
      <div class="col-md-8">
        <h1 class="center-md">{{getActor.name}}</h1>
        <p>{{convertDate(getActor.birthday)}}</p>
        <p v-if="getActor.biography">{{getActor.biography}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import dayjs from "dayjs";

export default {
  name: "actorDetails",

  created() {
    this.$store.dispatch("actorRequest", this.$route.params.id);
  },

  computed: {
    ...mapGetters(["getActor"])
  },

  methods: {
    convertDate(date) {
      return dayjs(date).format("DD/MM/YYYY");
    }
  }
}
</script>

<style lang="scss"></style>