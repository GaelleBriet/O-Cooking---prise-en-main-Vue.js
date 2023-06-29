import { defineStore } from 'pinia'
import { recipes } from '@/data/recipes'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    data: recipes
  }),
  getters: {
    getRecipes(state) {
      return state.data
    },
    getRecipeById: (state) => (id) => {
      return state.data.find((recipe) => recipe.id === id) || null
    }
  },
})
