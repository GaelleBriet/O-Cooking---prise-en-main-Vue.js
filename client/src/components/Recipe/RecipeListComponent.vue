<script setup>
import RecipeCardComponent from './RecipeCardComponent.vue'
import { useRecipesStore } from '../../stores/recipes'
import { computed } from 'vue'

const recipeStore = useRecipesStore()
const recipes = computed(() => recipeStore.getRecipes)
const isLoaded = computed(() => recipeStore.isLoaded)
</script>

<template>
  <div v-if="isLoaded">
    <template v-for="recipe in recipes" :key="recipe.id">
      <RecipeCardComponent
        image="https://picsum.photos/400/300?grayscale"
        :imageAlt="recipe.name"
        :recipeName="recipe.name"
        :recipeDescription="recipe.description"
        :id="recipe.id"
      />
    </template>
  </div>
  <div v-else>
    <p>Chargement des recettes ...</p>
  </div>
</template>

<style scoped lang="scss"></style>
