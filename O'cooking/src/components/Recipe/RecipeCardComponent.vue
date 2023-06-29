<script setup>
defineProps({
  image: String,
  imageAlt: String,
  recipeName: String,
  recipeDescription: String
})
</script>

<template>
  <div class="recipe">
    <a class="recipe-link" href="/recipe">
      <img :src="image" :alt="imageAlt" />
    </a>
    <div>
      <h3>{{ recipeName }}</h3>
      <p>{{ recipeDescription }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.recipe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  .recipe-link img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
