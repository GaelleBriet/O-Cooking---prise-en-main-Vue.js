<script setup>
import { getCapitalizedText } from '../../utils/textFormatter'
import { useRecipesStore } from '../../stores/recipes'
import { useRoute } from 'vue-router'
import { onMounted, computed, ref } from 'vue'
import CommentListComponent from '../Comment/CommentListComponent.vue'

const route = useRoute()
const recipesStore = useRecipesStore()
const currentRecipeId = parseInt(route.params.id)

// const currentRecipe = recipesStore.getRecipeById(parseInt(route.params.id))
const currentRecipe = computed(() => {
  return recipesStore.getRecipeById(currentRecipeId)
})

const currentComments = computed(() => {
  return recipesStore.getCommentsByRecipedId(currentRecipeId)
})

onMounted(async () => {
  await recipesStore.fetchCommentsForRecipeFromService(currentRecipeId)
})
</script>

<template>
  <div class="container">
    <div class="box">
      <template v-if="currentRecipe">
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
      </template>
    </div>
    <CommentListComponent :comments="currentComments" />
  </div>
</template>

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
