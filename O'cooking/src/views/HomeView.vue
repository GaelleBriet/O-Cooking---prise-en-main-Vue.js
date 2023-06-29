<script setup>
import TitleComponent from '../components/TitleComponent.vue'
import RecipeListComponentVue from '../components/Recipe/RecipeListComponent.vue'
import { getUppercaseText } from '../helpers/textFormatter'
</script>

<template>
  <div class="main">
    <TitleComponent :title="getUppercaseText('recettes')" />
    <RecipeListComponentVue />
  </div>
</template>

<style scoped lang="scss"></style>
