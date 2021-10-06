<template>
  <div class="ram-container">
    {{ characterId }}
    {{ character }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "character",
  props: {
    characterId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("characters", ["character"]),
  },
  methods: {
    ...mapActions("characters", ["getCharacterById"]),
  },
  mounted() {
    this.getCharacterById(this.characterId);
  },
};
</script>

<style scoped></style>
