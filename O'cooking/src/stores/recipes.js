import { defineStore } from 'pinia'
import { recipes } from '@/data/recipes'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    data: recipes
  })
})
