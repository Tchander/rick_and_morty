<template>
  <div v-if="characters">
    <pagination-buttons />
    <div class="ram-search-field">
      <input type="text" v-model="search" placeholder="Enter character name" />
      <button v-if="search" class="ram-search-clear-btn" @click="search = ''">
        x
      </button>
    </div>
    <div>
      <select class="ram-selector" v-model="filterByStatus">
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
      filterByStatus: "All",
    };
  },
  computed: {
    ...mapState("characters", {
      characters: "characters",
    }),
    charactersByName() {
      return this.filteredByStatus().filter(
        (i) => i.name.indexOf(this.search) !== -1
      );
    },
  },
  methods: {
    filteredByStatus() {
      if (this.filterByStatus !== "All") {
        return this.characters.results.filter(
          (i) => i.status === this.filterByStatus
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
  position: relative;
  width: 300px;
  margin: 0 auto 20px auto;
}
.ram-search-field > input {
  width: 100%;
  padding: 5px;
  font-size: 20px;
  background-color: #edd3ee;
  border: none;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.13);
  outline: none;
  transition: 0.3s;
}
.ram-search-clear-btn {
  position: absolute;
  top: 4px;
  right: 0;
  border-radius: 50%;
  color: #000;
  font-weight: 700;
  background-color: #edd3ee;
  font-size: 20px;
  border: 0;
  cursor: pointer;
}
.ram-selector {
  font-size: 16px;
  background-color: #edd3ee;
  color: #000;
  padding: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.13);
  border: 0;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
