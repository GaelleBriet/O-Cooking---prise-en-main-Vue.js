<script setup>
import { useRecipesStore } from '../stores/recipes'
import { useRouter } from 'vue-router'

const router = useRouter()
const recipeStore = useRecipesStore()

const saveRecipe = (e) => {
  e.preventDefault()

  const name = e.target.name.value
  const description = e.target.description.value
  const ingredients = e.target.ingredients.value
  const recipe = e.target.recipe.value
  const image = 'hotdog.jpg'
  const id = 11

  const newRecipe = {
    name,
    description,
    ingredients,
    recipe,
    image,
    id
  }

  recipeStore.saveRecipe(newRecipe)

  //e.target.reset()
  e.target.name.value = ''
  e.target.description.value = ''
  e.target.ingredients.value = ''
  e.target.recipe.value = ''

  router.push('/recipe/11')
}
</script>

<template>
  <div class="main .recipe-form">
    <h2 class="title">créer une recette</h2>
    <form @submit="saveRecipe">
      <div>
        <label class="label" for="name">Nom</label>
        <input
          class="input"
          type="text"
          name="name"
          id="name"
          placeholder="Nom de la recette"
          v-model="name"
        />
      </div>

      <div>
        <label class="label" for="description">Description</label>
        <input
          class="input"
          type="text"
          name="description"
          id="description"
          placeholder="Description de la recette"
          v-model="description"
        />
      </div>

      <div>
        <label class="label" for="ingredients">Ingrédients</label>
        <p>
          <textarea name="ingredients" id="ingredients" rows="10" v-model="ingredients"></textarea>
        </p>
      </div>

      <div>
        <label class="label" for="recipe">Recette</label>
        <p><textarea name="recipe" id="recipe" rows="10" v-model="recipe"></textarea></p>
      </div>

      <input class="submit" type="submit" value="Sauvegarder" />
    </form>
  </div>
</template>

<style scoped lang="scss">

input,
textarea {
  width: 500px;
  padding: 1rem;
}
</style>
