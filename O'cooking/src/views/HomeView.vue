<script setup>
import TitleComponent from '../components/TitleComponent.vue'
import RecipeListComponentVue from '../components/Recipe/RecipeListComponent.vue'

const title = 'recettes'
</script>

<template>
  <div class="main">
    <TitleComponent :title="title" className="uppercase" />
    <RecipeListComponentVue />
  </div>
</template>

<style scoped lang="scss">
.uppercase {
  text-transform: uppercase;
}
</style>
