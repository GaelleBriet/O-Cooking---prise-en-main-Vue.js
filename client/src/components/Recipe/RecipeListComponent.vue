<script setup>
import RecipeCardComponent from './RecipeCardComponent.vue'
import { useRecipesStore } from '../../stores/recipes'
import { computed, ref } from 'vue'

const recipeStore = useRecipesStore()
const recipes = computed(() => recipeStore.getRecipes)
const isLoaded = computed(() => recipeStore.isLoaded)

const currentPage = ref(1)
const recipesPerPage = 10

// Calcul de l'index de début et de fin des recettes sur la page actuelle
const startIndex = computed(() => (currentPage.value - 1) * recipesPerPage)
const endIndex = computed(() => startIndex.value + recipesPerPage)

// Recettes affichées sur la page actuelle
const displayedRecipes = computed(() => recipes.value.slice(startIndex.value, endIndex.value))

// Fonction pour passer à la page précédente
const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
  }
}

// Fonction pour passer à la page suivante
const nextPage = () => {
  if (endIndex.value < recipes.value.length) {
    currentPage.value += 1
  }
}
</script>

<template>
  <div v-if="isLoaded">
    <template v-for="recipe in displayedRecipes" :key="recipe.id">
      <RecipeCardComponent
        image="https://picsum.photos/400/300?grayscale"
        :imageAlt="recipe.name"
        :recipeName="recipe.name"
        :recipeDescription="recipe.description"
        :id="recipe.id"
      />
    </template>
    <!-- Pagination -->
    <div>
      <button @click="previousPage" :disabled="currentPage === 1">Précédent</button>
      <button @click="nextPage" :disabled="endIndex >= recipes.length">Suivant</button>
    </div>
  </div>
  <div v-else>
    <p>Chargement des recettes ...</p>
  </div>
</template>

<style scoped lang="scss"></style>
