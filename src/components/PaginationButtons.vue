<template>
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
      @click="paginate($options.PREV_PAGE_TYPE)"
    >
      Previous
    </button>
    <button
      class="ram-pagination-btn"
      v-if="currentPage < characters.info.pages"
      @click="paginate($options.NEXT_PAGE_TYPE)"
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
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { BASE_CHARACTERS_URL } from "@/const";

export default {
  name: "PaginationButtons",
  BASE_CHARACTERS_URL,
  NEXT_PAGE_TYPE: "next",
  PREV_PAGE_TYPE: "prev",
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
  },
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
    async paginate(type = this.$options.NEXT_PAGE_TYPE) {
      const { page } = this.$route.query;
      this.changeCurrentPage(
        this.currentPage + (type === this.$options.NEXT_PAGE_TYPE ? 1 : -1)
      );
      if (this.currentPage !== Number(page)) {
        await this.$router.push({
          name: "index",
          query: { page: this.currentPage },
        });
      }
      await this.getAllCharacters(
        BASE_CHARACTERS_URL + this.currentPage.toString()
      );
    },
  },
  async mounted() {
    if (this.$route.query.page) {
      this.changeCurrentPage(+this.$route.query.page);
    }
    const page = this.page || 1;
    await this.getAllCharacters(BASE_CHARACTERS_URL + page);
  },
};
</script>

<style scoped>
.ram-pagination-buttons {
  margin: 20px 0;
}
.ram-pagination-btn {
  width: 100px;
  font-size: 16px;
  background-color: #edd3ee;
  border: 0;
  padding: 12px 0;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.13);
  margin: 0 10px;
  transition: 0.3s;
}
.ram-pagination-btn:hover {
  cursor: pointer;
  background-color: #e6a9e8;
}
.ram-pagination-btn:hover:disabled {
  cursor: not-allowed;
  background-color: #edd3ee;
}
</style>
