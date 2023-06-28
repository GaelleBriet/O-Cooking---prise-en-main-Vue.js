<script setup>
import RecipeDetailComponent from './RecipeDetailComponent.vue'

const recipes = [
  {
    id: 1,
    image: 'burger.jpg',
    name: 'Burger frites',
    description: 'Savourez un délicieux burger accompagné de frites croustillantes !'
  }
]
</script>

<template>
    <template v-for="recipe in recipes" :key="recipe.id">
      <RecipeDetailComponent
        :image="recipe.image"
        :imageAlt="recipe.name"
        :recipeName="recipe.name"
        :recipeDescription="recipe.description"
      />
    </template>
</template>

<style scoped lang="scss"></style>
