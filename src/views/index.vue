<template>
  <div></div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "index",
  computed: {
    ...mapState("characters", {
      characters: "characters",
    }),
  },
  methods: {
    ...mapActions("characters", ["getAllCharacters"]),
  },
  async mounted() {
    await this.getAllCharacters();
    console.log(this.characters);
  },
};
</script>

<style scoped></style>
