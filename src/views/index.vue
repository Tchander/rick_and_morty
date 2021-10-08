<template>
  <div v-if="characters">
    <pagination-buttons />
    <div class="ram-search-field">
      <input type="text" v-model="search" />
    </div>
    <div class="ram-selector">
      <select v-model="filterBySpecies">
        <option
          v-for="op of $options.OPTIONS"
          :value="op.value"
          :key="op.value"
        >
          {{ op.text }}
        </option>
      </select>
    </div>
    <div class="ram-container">
      <index-cards v-bind:characters-by-name="charactersByName" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { OPTIONS } from "@/const";
import PaginationButtons from "@/components/PaginationButtons";
import IndexCards from "@/components/IndexCards";

export default {
  name: "index",
  OPTIONS,
  components: { IndexCards, PaginationButtons },
  data() {
    return {
      search: "",
      filterBySpecies: "All",
    };
  },
  computed: {
    ...mapState("characters", {
      characters: "characters",
    }),
    charactersByName() {
      return this.filteredBySpecies().filter(
        (i) => i.name.indexOf(this.search) !== -1
      );
    },
  },
  methods: {
    filteredBySpecies() {
      if (this.filterBySpecies !== "All") {
        return this.characters.results.filter(
          (i) => i.species === this.filterBySpecies
        );
      } else {
        return this.characters.results;
      }
    },
  },
};
</script>

<style scoped>
.ram-search-field {
  margin-bottom: 20px;
}
</style>
