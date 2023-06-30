import { defineStore } from 'pinia'
import { getFromStorage, setToStorage } from '../Services/Helpers/useLocalStorage'
//import { reactive } from 'vue'


export const useUserStore = defineStore('users', {
  state: () =>
    ({
      isLoggedIn: getFromStorage('isLoggedIn') || false,
      name: String,
      password: String,
    }),
  actions: {
    login() {
      setToStorage('isLoggedIn', true)
      this.isLoggedIn = true
    },
    logout() {
      setToStorage('isLoggedIn', false)
      this.isLoggedIn = false
    }
  }
})
