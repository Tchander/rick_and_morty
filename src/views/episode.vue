<template>
  <div>
    <div class="ram-episode-card">
      <div class="ram-episode-name">{{ currentEpisode.name }}</div>
      <div class="ram-episode-date">{{ currentEpisode.air_date }}</div>
      <div class="ram-episode-character-images">
        <div
          class="ram-episode-character-image"
          v-for="(character, i) in currentEpisode.characters"
          :key="i"
        >
          <router-link
            :to="{
              name: 'character',
              path: '/character',
              params: { characterId: characterId(character) },
            }"
          >
            <img
              :src="
                'https://rickandmortyapi.com/api/character/avatar/' +
                characterId(character) +
                '.jpeg'
              "
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
    <back-button />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BackButton from "@/components/BackButton";

export default {
  name: "episode",
  components: { BackButton },
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
    characterId(characterUrl) {
      return characterUrl
        .split("")
        .filter((value) => !isNaN(value))
        .join("");
    },
  },
  async mounted() {
    await this.getEpisodeByApi(this.episodeId);
  },
};
</script>

<style scoped>
.ram-episode-card {
  margin: 20px auto;
  padding: 20px;
  width: 100%;
  max-width: 1400px;
  background-color: #edd3ee;
}
.ram-episode-name {
  margin-bottom: 15px;
  font-size: 26px;
  font-weight: 700;
}
.ram-episode-date {
  font-size: 18px;
  margin-bottom: 15px;
}
.ram-episode-character-images {
  display: flex;
  flex-wrap: wrap;
}
.ram-episode-character-image {
  width: 25%;
  margin: 10px 0;
}
</style>
