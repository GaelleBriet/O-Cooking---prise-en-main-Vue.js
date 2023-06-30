import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({
    isLoggedIn: false
  }),
})
