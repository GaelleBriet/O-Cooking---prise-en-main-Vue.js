<script setup>
import { getCapitalizedText } from '../../utils/textFormatter'
import { useRecipesStore } from '../../stores/recipes'
import { useRoute } from 'vue-router'
//import { useRecipesStore} from '../../stores/recipes2'

const route = useRoute()
const recipesStore = useRecipesStore()
// je récupère la recette grâce à l'id passé dans la route
 const currentRecipe = recipesStore.getRecipeById(parseInt(route.params.id))


 // const currentRecipe = recipesStore.fetchRecipeByIdFromService(parseInt(route.params.id));
 // currentRecipe.value = await recipesStore.fetchRecipeByIdFromService(id)


// // je récupère la liste des ingrédients de la recette
const ingredientsList = currentRecipe.ingredients

// // l'expression régulière recherche les espaces ('\s') suivis d'un ou plusieurs chiffres ('(\d+)')
// // puis on applique un saut de ligne en utilisant $1 pour réinsérer les chiffres capturés
const formatRecipeSteps = (recipe) => {
  return recipe.replace(/\s(\d+)/g, '<br>$1')
}
</script>

<template>
  <div class="container">
    <div class="box">
      <h2 class="title">{{ currentRecipe.name }}</h2>
      <img
        :src="`../../../public/${currentRecipe.image}`"
        :alt="currentRecipe.name"
        class="recipe-img"
      />
      <h3>Liste des ingrédients :</h3>
      <ul>
      <template v-for="ingredient in ingredientsList" :key="ingredient">
        <li class="ingredient-list"><i class="fa-solid fa-cookie-bite"></i>{{ getCapitalizedText(ingredient) }}</li>
      </template>
    </ul>
    <h3>Préparation :</h3>
    <p v-html="formatRecipeSteps(currentRecipe.recipe)" class="recipe-steps"></p>
    </div>
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