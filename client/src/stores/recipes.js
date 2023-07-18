import { defineStore } from 'pinia'
import { setToStorage } from '../Services/Helpers/useLocalStorage'
import { getFromStorage } from '../Services/Helpers/useLocalStorage'
import { fetchAllRecipesFromDatabase } from '../Services/DataLayer/recipes'
import { fetchOneRecipeWithCommentsFromDatabase } from '../Services/DataLayer/recipes'
import { addOneRecipeToDatabase } from '../Services/DataLayer/recipes'
import { reactive, ref } from 'vue'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    // data: getFromStorage('recipes') || []
    data: reactive([]),
    loaded: false
  }),
  getters: {
    getRecipes: (state) => state.data,
    getRecipeById: (state) => (id) => {
      return state.data.find((recipe) => recipe.id === id) || null
    },
    isLoaded: (state) => state.loaded
  },
  actions: {
    async fetchAllRecipesFromService() {
      const recipes = await fetchAllRecipesFromDatabase()
      this.data = recipes
      this.loaded = true
    },
    async fetchOneRecipeWithCommentsFromService(id) {
      this.data = await fetchOneRecipeWithCommentsFromDatabase(id)
    },
    async addRecipe(obj) {
      await addOneRecipeToDatabase(obj)
      this.data.push(obj)
      // this.data = await this.fetchAllRecipesFromService()
      this.loaded = true
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
