<script setup>
import { getCapitalizedText } from '../../utils/textFormatter'
import { useRecipesStore } from '../../stores/recipes'
import { useRoute } from 'vue-router'
import { onMounted, computed } from 'vue'

const route = useRoute()
const recipesStore = useRecipesStore()

// const currentRecipe = recipesStore.getRecipeById(parseInt(route.params.id))
const currentRecipe = computed(() => {
  const id = parseInt(route.params.id)
  return recipesStore.getRecipeById(id)
})
const currentComments = computed( ()  => {
  const id = parseInt(route.params.id)
  return recipesStore.getComments(id)
})
console.log(currentComments.value);
// const ingredientsList = computed(() => {
//   return currentRecipe.value.ingredients
// })
// console.log(ingredientsList.value);
// const ingredientsList = currentRecipe.value.ingredients
// function splitIngredients(ingredientsList) {
//   return ingredientsList.split('<br>')
// }

// onMounted(async () => {
//   const id = parseInt(route.params.id)
//   await recipesStore.fetchRecipe(id)
// })
</script>

<template>
  <div class="container">
    <div class="box">
      <h2 class="title">{{ currentRecipe.name }}</h2>
      <img
        src="https://picsum.photos/400/300?grayscale"
        :alt="currentRecipe.name"
        class="recipe-img"
      />
      <h3>Liste des ingrédients :</h3>
      <p>{{ currentRecipe.ingredients }}</p>
      <h3>Auteur :</h3>
      <p>{{ currentRecipe.user.username }}</p>
      <h3>Commentaires :</h3>
      <p>{{ currentRecipe.comments }}</p>
    </div>
  </div>
</template>
<!-- :src="`../../../public/${currentRecipe.image}`" -->

<!-- <ul>
  <template v-for="ingredient in splitIngredients(ingredientsList)" :key="ingredient">
    <li class="ingredient-list">
      <i class="fa-solid fa-cookie-bite"></i>{{ getCapitalizedText(ingredient) }}
    </li>
  </template>
</ul> -->

<style scoped lang="scss">
.box {
  width: 450px;
  margin: 0 auto;
  padding: 0 1rem;
  .recipe-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  ul {
    margin-bottom: 1.5rem;
    .ingredient-list {
      font-size: 1rem;
      margin-bottom: 1rem;
      color: #666;
      font-weight: 30;
      text-align: left;
      .fa-cookie-bite {
        color: #666;
        margin-right: 0.5rem;
      }
    }
  }
  .recipe-steps {
    font-size: 1rem;
    color: #666;
    text-align: left;
    line-height: 2;
    font-weight: 30;
    margin-bottom: 1rem;
  }
}
</style>
