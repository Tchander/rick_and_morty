<template>
  <div>
    <div class="ram-container" v-if="character">
      <div class="ram-character-card">
        <div class="ram-character-card-name">{{ character.name }}</div>
        <div class="ram-character-card-species">{{ character.species }}</div>
        <img
          :src="character.image"
          alt="image"
          class="ram-character-card-image"
        />
        <div class="ram-character-card-location">
          Location: {{ character.location.name }}
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
  name: "character",
  components: { BackButton },
  props: {
    characterId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("characters", ["character"]),
    ...mapGetters("currentPage", ["currentPage"]),
  },
  methods: {
    ...mapActions("characters", ["getCharacterById"]),
  },
  async mounted() {
    await this.getCharacterById(this.characterId);
  },
};
</script>

<style scoped>
.ram-character-card {
  display: flex;
  flex-direction: column;
  background-color: #edd3ee;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 100%;
  max-width: 600px;
  margin: 50px 0;
  padding: 10px 0;
  border-radius: 10px;
}
.ram-character-card-name {
  margin: 15px 0;
  font-size: 26px;
  font-weight: 700;
}
.ram-character-card-species {
  font-size: 18px;
}
.ram-character-card-image {
  padding: 30px;
}
.ram-character-card-location {
  font-size: 18px;
  margin-bottom: 15px;
}
</style>
