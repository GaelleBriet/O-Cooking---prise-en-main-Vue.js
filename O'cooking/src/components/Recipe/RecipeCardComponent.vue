<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  image: String,
  imageAlt: String,
  recipeName: String,
  recipeDescription: String,
  id: Number
})

const showRecipePageById = (id) => {
console.log('RC : showRecipePageById')
router.push(`/recipe/${id}`)
}
</script>

<template>
  <div class="recipe">
    <RouterLink :to="{ path: `/recipe/${id}` }" class="recipe-link">
      <img :src="image" :alt="imageAlt" @click="showRecipePageById(id)"/>
    </RouterLink>
    <div>
      <h3>{{ recipeName }}</h3>
      <p>{{ recipeDescription }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.recipe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  .recipe-link {
    img {
      width: 100%;
      height: 100%;
      max-height: 300px;
      object-fit: fill;
    }
  }
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
