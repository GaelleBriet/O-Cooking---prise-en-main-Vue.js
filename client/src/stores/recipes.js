import { defineStore } from 'pinia'
import { setToStorage } from '../Services/Helpers/useLocalStorage'
import { getFromStorage } from '../Services/Helpers/useLocalStorage'
import { fetchAllRecipesFromDatabase } from '../Services/DataLayer/recipes'
import { getOneRecipe } from '../Services/DataLayer/recipes'
import { addOneRecipeToDatabase } from '../Services/DataLayer/recipes'
import { reactive, ref } from 'vue'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    // data: getFromStorage('recipes') || []
    data: reactive([]),
    comments: reactive([]),
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
      //this.data = await fetchOneRecipeWithCommentsFromDatabase(id)
      this.loaded = false
      const recipe = await getOneRecipe(id)
      this.data = recipe
      this.loaded = true
      return recipe
    },
    async addRecipe(obj) {
      await addOneRecipeToDatabase(obj)
      this.data.push(obj)
      // this.data = await this.fetchAllRecipesFromService()
      this.loaded = true
    },
    async getComments(id) {
      const response = await fetch(
        `http://gaellebriet-server.eddi.cloud:8090/recipes/${id}/comments`
      )
      const data = await response.json()
      this.comments = data
      console.log(this.comments)
      return data
    },
    async fetchRecipe(id) {
      try {
        const response = await fetch(`http://gaellebriet-server.eddi.cloud:8090/recipes/${id}`)

        if (!response.ok) {
          throw new Error(`Impossible de récupérer la recette avec l'identifiant ${id}.`)
        }

        const data = await response.json()
        // Save the retrieved recipe in the state.
        this.data = data
        return data
      } catch (error) {
        console.error(error)
        throw error
      }
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
