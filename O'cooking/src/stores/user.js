import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    login(state) {
      return state.isLoggedIn = true
    },
    logout(state) {
      return state.isLoggedIn = false
    }
  }
})
