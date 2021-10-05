<template>
  <div class="ram-container">
    {{ characterId }}
  </div>
</template>

<script>
export default {
  name: "character",
  props: {
    characterId: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
