import { defineStore } from 'pinia'
import { setToStorage } from '../Services/Helpers/useLocalStorage'
import { getFromStorage } from '../Services/Helpers/useLocalStorage'
import { fetchAllRecipesFromDatabase, fetchCommentsForRecipeFromDatabase } from '../Services/DataLayer/recipes'
import { getOneRecipe } from '../Services/DataLayer/recipes'
import { addOneRecipeToDatabase } from '../Services/DataLayer/recipes'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    // data: getFromStorage('recipes') || []
    recipes: [],
    recipe: null,
    comments: [],
    loaded: false
  }),
  getters: {
    getRecipes: (state) => state.recipes,
    getRecipeById: (state) => (id) => {
      return state.recipes.find((recipe) => recipe.id === id) || null
    },
    isLoaded: (state) => state.loaded,
    getCommentsByRecipedId: (state) => (recipeId) => {
      return state.comments.filter((comment) => comment.recipe_id === recipeId);
    },
  },
  actions: {
    async fetchAllRecipesFromService() {
      const recipes = await fetchAllRecipesFromDatabase()
      this.recipes = recipes
      this.loaded = true
    },
    async fetchOneRecipeWithCommentsFromService(id) {
      //this.data = await fetchOneRecipeWithCommentsFromDatabase(id)
      this.loaded = false
      const recipe = await getOneRecipe(id)
      this.recipe = recipe
      this.loaded = true
      return recipe
    },
    async fetchCommentsForRecipeFromService(id) {
      const comments = await fetchCommentsForRecipeFromDatabase(id);
      this.comments = comments;
    },
    async addRecipe(obj) {
      await addOneRecipeToDatabase(obj)
      this.recipes.push(obj)
      // this.data = await this.fetchAllRecipesFromService()
      this.loaded = true
    },
    resetRecipe() {
      this.recipe = null
    }
  }
})

// saveRecipe(recipe) {
//   this.data.push(recipe)
//   setToStorage('recipe', recipe)
// },
// //   try {
// //     const recipes = await getRecipes()
// //     this.data = recipes
// //     console.log(this.data)
// //   } catch (error) {
// //     console.error('Erreur lors de la récupération des recettes', error)
// //   }
// // },
// async fetchAll() {
//   try {
//     const recipes = await fetchRecipes()
//     this.data = recipes
//     setToStorage('recipes', recipes)
//     console.log(this.data)
//   } catch (error) {
//     console.error('Erreur lors de la récupération des recettes', error)
//   }
// },
