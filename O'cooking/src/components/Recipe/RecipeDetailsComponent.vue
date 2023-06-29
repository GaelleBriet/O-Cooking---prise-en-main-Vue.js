<script setup>
import RecipeCardComponent from './RecipeCardComponent.vue'
import { useRecipesStore } from '../../stores/recipes'

const recipeStore = useRecipesStore()
const recipes = recipeStore.data

console.log(recipeStore.data)
</script>

<template>
   <div class="main single-recipe">
    <h2 class="title">Pantouflet de légumes</h2>

    <figure>
      <img src="./assets/images/burger.jpg" alt="Pantouflet de légumes" />
    </figure>
    <p>Choisissez deux belles charentaises (gauche, droite ou une de chaque, peu importe) et versez-y vos légumes
      blanchis à la
      poêle. Mettez 10 minutes O'Four et remuez de temps en temps. Servez chaud avec une sauce au choix.</p>
  </div>
</template>

<style scoped lang="scss"></style>