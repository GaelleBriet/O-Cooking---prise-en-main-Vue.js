import { defineStore } from 'pinia'
import { recipes } from '@/data/recipes'
import { setToStorage } from '../Services/Helpers/useLocalStorage'

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
  actions: {
    saveRecipe(recipe) {
      this.data.push(recipe);
      setToStorage('recipe', recipe);
    }
  }
})
