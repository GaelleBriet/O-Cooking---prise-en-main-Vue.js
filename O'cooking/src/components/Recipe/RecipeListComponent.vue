<script setup>
import RecipeCardComponent from './RecipeCardComponent.vue'
import { useRecipesStore } from '../../stores/recipes'
import { getCapitalizedText } from '@/helpers/textFormatter.js'

const recipeStore = useRecipesStore()
const recipes = recipeStore.data

console.log(recipeStore.data)
// const recipes = [
//   {
//     id: 1,
//     image: 'burger.jpg',
//     name: 'Burger frites',
//     description: 'Savourez un délicieux burger accompagné de frites croustillantes !'
//   },
//   {
//     id: 2,
//     image: 'burger.jpg',
//     name: 'Burger frites',
//     description: 'Savourez un délicieux burger accompagné de frites croustillantes !'
//   },
//   {
//     id: 3,
//     image: 'burger.jpg',
//     name: 'Burger frites',
//     description: 'Savourez un délicieux burger accompagné de frites croustillantes !'
//   }
// ]
</script>

<template>
  <template v-for="recipe in recipes" :key="recipe.id">
    <RecipeCardComponent
      :image="recipe.image"
      :imageAlt="recipe.name"
      :recipeName="recipe.name"
      :recipeDescription="recipe.description"
    />
  </template>
</template>

<style scoped lang="scss"></style>
