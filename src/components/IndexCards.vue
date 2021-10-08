<template>
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
      <img class="ram-index-card-image" :src="character.image" alt="image" />
      <div
        v-for="(episode, index) in character.episode.slice(0, 5)"
        :key="index"
        class="ram-index-card-episode"
      >
        <a class="ram-index-card-episode__link" href="#">{{ episode }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexCards",
  props: {
    charactersByName: {
      required: true,
    },
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
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.13);
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
</style>
