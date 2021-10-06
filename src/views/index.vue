<template>
  <div class="ram-container" v-if="characters">
    <div class="ram-character-cards">
      <div
        v-for="(character, i) in characters.results"
        :key="i"
        class="ram-character-card"
      >
        <div class="ram-character-name">
          <router-link
            :to="{
              name: 'character',
              path: '/character',
              params: { characterId: character.id.toString() },
            }"
            class="ram-character-name__link"
            >{{ character.name }}</router-link
          >
        </div>
        <div class="ram-character-species">{{ character.species }}</div>
        <img class="ram-character-image" :src="character.image" alt="image" />
        <div
          v-for="(episode, index) in character.episode.slice(0, 5)"
          :key="index"
          class="ram-character-episode"
        >
          <a class="ram-character-episode__link" href="#">{{ episode }}</a>
        </div>
      </div>
    </div>
    <button :disabled="pageNumber === 1" @click="prevPage">Previous</button>
    <button :disabled="pageNumber >= characters.info.pages" @click="nextPage">
      Next
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { BASE_CHARACTERS_URL } from "@/const";

export default {
  name: "index",
  BASE_CHARACTERS_URL,
  data() {
    return {
      pageNumber: 1,
    };
  },
  computed: {
    ...mapState("characters", {
      characters: "characters",
    }),
  },
  methods: {
    ...mapActions("characters", ["getAllCharacters"]),
    async nextPage() {
      await this.getAllCharacters(this.characters.info.next);
      this.pageNumber++;
    },
    async prevPage() {
      await this.getAllCharacters(this.characters.info.prev);
      this.pageNumber--;
    },
  },
  async mounted() {
    await this.getAllCharacters(BASE_CHARACTERS_URL);
  },
};
</script>

<style scoped>
.ram-character-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 25px 0;
}
.ram-character-card {
  display: flex;
  flex-direction: column;
  width: 24%;
  background-color: #eaeaea;
  margin: 15px 0;
  padding: 10px 0;
  border-radius: 10px;
}
.ram-character-name {
  margin: 5px 0;
}
.ram-character-name__link {
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;
}
.ram-character-name__link:hover {
  color: #4d75cd;
}
.ram-character-image {
  padding: 20px;
}
.ram-character-episode {
  margin-bottom: 8px;
}
.ram-character-episode__link {
  text-decoration: none;
  color: #000000;
  cursor: pointer;
}
.ram-character-episode__link:hover {
  text-decoration: underline;
}
button {
  width: 100px;
  height: 40px;
  background-color: #eef;
}
button:hover {
  cursor: pointer;
}
button:hover:disabled {
  cursor: not-allowed;
}
</style>
