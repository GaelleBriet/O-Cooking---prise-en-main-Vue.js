<script setup>
import HeaderComponent from './components/layout/HeaderComponent.vue'
import FooterComponent from './components/layout/FooterComponent.vue'
import { useRecipesStore } from './stores/recipes'
import { onMounted } from 'vue'

onMounted(() => {
  const recipeStore = useRecipesStore()
  recipeStore.fetchAllRecipesFromService()
})

</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style lang="scss"></style>
