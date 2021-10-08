<template>
  <div class="ram-container">
    {{ currentEpisode }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "episode",
  props: {
    episodeId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("episodes", ["currentEpisode"]),
  },
  methods: {
    ...mapActions("episodes", ["getEpisodeByApi"]),
  },
  async mounted() {
    await this.getEpisodeByApi(this.episodeId);
  },
};
</script>

<style scoped></style>
