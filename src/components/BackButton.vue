<template>
  <div class="ram-character-btn">
    <router-link
      class="ram-character-btn__link"
      :to="{
        name: 'index',
        path: '/',
        query: { page: this.currentPage },
      }"
      >Back</router-link
    >
  </div>
</template>

<script>
export default {
  name: "BackButton",
};
</script>

<style scoped>
.ram-character-btn {
  margin: 30px 0;
}
.ram-character-btn__link {
  text-decoration: none;
  width: 100px;
  margin: 0 auto;
  padding: 20px 60px;
  font-size: 18px;
  color: #000;
  background-color: #edd3ee;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
  transition: 0.3s;
}
.ram-character-btn__link:hover {
  background-color: #e6a9e8;
  font-weight: 700;
  cursor: pointer;
}
</style>
