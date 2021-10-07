<template>
  <div v-if="characters">
    <div class="ram-pagination-buttons">
      <button
        class="ram-pagination-btn"
        :disabled="currentPage === 1"
        @click="specificPage(1)"
      >
        1
      </button>
      <button
        class="ram-pagination-btn"
        v-if="currentPage !== 1"
        @click="prevPage"
      >
        Previous
      </button>
      <button
        class="ram-pagination-btn"
        v-if="currentPage < characters.info.pages"
        @click="nextPage"
      >
        Next
      </button>
      <button
        class="ram-pagination-btn"
        :disabled="currentPage === characters.info.pages"
        @click="specificPage(characters.info.pages)"
      >
        {{ characters.info.pages }}
      </button>
    </div>
    <input type="text" v-model="search" />
    <div class="ram-container">
      <div class="ram-index-cards">
        <div
          v-for="(character, i) in charactersByName"
          :key="i"
          class="ram-index-card"
        >
          <div class="ram-index-card-name">
            <router-link
              :to="{
                name: 'character',
                path: '/character',
                params: { characterId: character.id.toString() },
              }"
              class="ram-index-card-name__link"
              >{{ character.name }}</router-link
            >
          </div>
          <div class="ram-index-card-species">{{ character.species }}</div>
          <img
            class="ram-index-card-image"
            :src="character.image"
            alt="image"
          />
          <div
            v-for="(episode, index) in character.episode.slice(0, 5)"
            :key="index"
            class="ram-index-card-episode"
          >
            <a class="ram-index-card-episode__link" href="#">{{ episode }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { BASE_CHARACTERS_URL } from "@/const";

export default {
  name: "index",
  BASE_CHARACTERS_URL,
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState("characters", {
      characters: "characters",
    }),
    ...mapGetters("currentPage", { page: "currentPage" }),
    currentPage: {
      get() {
        return this.page;
      },
      set(newPage) {
        this.changeCurrentPage(newPage);
      },
    },
    charactersByName() {
      return this.characters.results.filter(
        (i) => i.name.indexOf(this.search) !== -1
      );
    },
  },
  // watch: {
  //   "$route.query"() {
  //     this.changePage();
  //   },
  // },
  methods: {
    ...mapActions("characters", ["getAllCharacters"]),
    ...mapActions("currentPage", ["changeCurrentPage"]),
    async specificPage(pageNumber) {
      const { page } = this.$route.query;
      this.changeCurrentPage(pageNumber);
      if (page) {
        if (pageNumber !== Number(page)) {
          await this.$router.push({
            name: "index",
            query: { page: pageNumber },
          });
        }
      }
      await this.getAllCharacters(BASE_CHARACTERS_URL + pageNumber.toString());
    },
    async nextPage() {
      const { page } = this.$route.query;
      this.changeCurrentPage(this.currentPage + 1);
      if (page) {
        if (this.currentPage !== Number(page)) {
          await this.$router.push({
            name: "index",
            query: { page: this.currentPage },
          });
        }
      }
      await this.getAllCharacters(
        BASE_CHARACTERS_URL + this.currentPage.toString()
      );
    },
    async prevPage() {
      const { page } = this.$route.query;
      this.changeCurrentPage(this.currentPage - 1);
      if (page) {
        if (this.currentPage !== Number(page)) {
          await this.$router.push({
            name: "index",
            query: { page: this.currentPage },
          });
        }
      }
      await this.getAllCharacters(
        BASE_CHARACTERS_URL + this.currentPage.toString()
      );
    },
    // changePage() {
    //   const { page } = this.$route.query;
    //   console.log(page);
    //   if (page) {
    //     this.changeCurrentPage(Number(page));
    //   }
    // },
  },
  async mounted() {
    await this.$router.push({
      name: "index",
      query: { page: this.page },
    });
    await this.getAllCharacters(BASE_CHARACTERS_URL + this.page.toString());
  },
};
</script>

<style scoped>
.ram-index-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 25px 0;
  width: 100%;
}
.ram-index-card {
  display: flex;
  flex-direction: column;
  width: 24%;
  background-color: #edd3ee;
  margin: 15px 0;
  padding: 10px 0;
  border-radius: 10px;
}
.ram-index-card-name {
  margin: 5px 0;
}
.ram-index-card-name__link {
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;
}
.ram-index-card-name__link:hover {
  color: #4d75cd;
}
.ram-index-card-image {
  padding: 20px;
}
.ram-index-card-episode {
  margin-bottom: 8px;
}
.ram-index-card-episode__link {
  text-decoration: none;
  color: #000000;
  cursor: pointer;
}
.ram-index-card-episode__link:hover {
  text-decoration: underline;
}
.ram-pagination-buttons {
  margin: 20px 0;
}
.ram-pagination-btn {
  width: 100px;
  height: 40px;
  background-color: #eef;
  margin: 0 10px;
}
.ram-pagination-btn:hover {
  cursor: pointer;
}
.ram-pagination-btn:hover:disabled {
  cursor: not-allowed;
}
</style>
