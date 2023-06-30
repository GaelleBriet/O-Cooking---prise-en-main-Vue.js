import { defineStore } from 'pinia'
import RecipesService from '../services/recipes.js'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [],
    recipe: {}
  }),
  getters: {
    //doubleCount: (state) => state.count * 2,
  },
  actions: {
    async fetchAllRecipesFromService() {
      this.recipes = await RecipesService.fetchAllRecipesFromDatabase()
    },
    async fetchRecipeByIdFromService(id) {
      return await RecipesService.fetchRecipeByIdFromDatabase(id)
    }
  }
})
