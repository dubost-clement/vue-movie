<template>
  <b-col lg="3">
    <div class="bg-white border rounded-lg p-2 h-100">
      <div class="mb-3">
        <h4>Date de sortie</h4>
        <span>{{ convertDate(getMovie.release_date) }}</span>
      </div>
      <div class="mb-3">
        <h4>Durée</h4>
        <span>{{runtime}}</span>
      </div>
      <div class="mb-3">
      <h4>Genres</h4>
        <span 
          v-for="genre in getGenres"
          :key="genre.id"
          class="badge badge-primary mr-2"
        >
          {{ genre.name }}
        </span>
      </div>
      <div class="mb-3">
        <h4>Acteurs principaux</h4>
        <a
          href="#"
          class="d-block"
          v-for="actor in getActors"
          :key="actor.id"
          @click.prevent="seeActor(actor.id)"
        >
          {{actor.name}}
        </a>
      </div>
    </div>
  </b-col>
</template>

<script>
import { mapGetters } from "vuex";
import dayjs from "dayjs";

export default {
  name: "MovieDetails",

  computed: {
    ...mapGetters(["getMovie", "getGenres", "getActors"]),

    runtime() {
      const hours = Math.floor(this.getMovie.runtime / 60);
      let minutes = this.getMovie.runtime % 60;

      if(minutes < 10) {
        minutes = "0" + minutes
      }
      
      return hours + "h" + minutes
    }
  },

  methods: {
    seeActor(actorId) {
      this.$router.push({ name: 'actor', params: { id:  actorId}});
    },

    convertDate(date) {
      return dayjs(date).format("DD/MM/YYYY");
    }
  }
};
</script>

<style lang="scss"></style>