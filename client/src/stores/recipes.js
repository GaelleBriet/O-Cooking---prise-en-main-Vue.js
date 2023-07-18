import { defineStore } from 'pinia'
// import { recipes } from '@/data/recipes'
import { setToStorage } from '../Services/Helpers/useLocalStorage'
import { getFromStorage } from '../Services/Helpers/useLocalStorage'
import { fetchRecipes } from '../Services/DataLayer/recipes'
import { fetchAllRecipesFromDatabase } from '../Services/DataLayer/recipes'
import { fetchOneRecipeWithCommentsFromDatabase } from '../Services/DataLayer/recipes'
import { addOneRecipeToDatabase } from '../Services/DataLayer/recipes'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    //data: recipes
    data: getFromStorage('recipes') || []
  }),
  getters: {
    // getRecipes(state) {
    //   return state.data;
    // },
    getRecipes: (state) => state.data,
    getRecipeById: (state) => (id) => {
      return state.data.find((recipe) => recipe.id === id) || null
    }
  },
  actions: {
    async fetchAllRecipesFromService() {
      this.data = await fetchAllRecipesFromDatabase()
    },
    async fetchOneRecipeWithCommentsFromService(id) {
      this.data = await fetchOneRecipeWithCommentsFromDatabase(id)
    },
    async addOneRecipeFromService(obj) {
      await addOneRecipeToDatabase(obj)
      this.data = await this.fetchAllRecipesFromService()
    }
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
  }
})
