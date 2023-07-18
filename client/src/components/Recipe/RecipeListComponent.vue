<script setup>
import RecipeCardComponent from './RecipeCardComponent.vue'
import { useRecipesStore } from '../../stores/recipes'

const recipeStore = useRecipesStore()
// const recipes = recipeStore.data

// recipeStore.fetchAll()
recipeStore.fetchAllRecipesFromService()
const recipes = recipeStore.getRecipes
</script>

<template>
  <template v-for="recipe in recipes" :key="recipe.id">
    <RecipeCardComponent
      image="https://picsum.photos/400/300?grayscale"
      :imageAlt="recipe.name"
      :recipeName="recipe.name"
      :recipeDescription="recipe.description"
      :id="recipe.id"
    />
  </template>
</template>

<style scoped lang="scss"></style>
<!-- <RecipeCardComponent
  :image="recipe.image"
  :imageAlt="recipe.name"
  :recipeName="recipe.name"
  :recipeDescription="recipe.description"
  :id="recipe.id"
/> -->
