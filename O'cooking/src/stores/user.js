import { defineStore } from 'pinia'
import { getFromStorage, setToStorage } from '../Services/Helpers/useLocalStorage'
//import { reactive } from 'vue'

export const useUserStore = defineStore('users', {
  state: () => ({
    user: {
      isLoggedIn: getFromStorage('isLoggedIn') || false,
      firstName: String,
      lastName: String,
      email: String,
      pseudo: String,
      password: String,
      pwValidation: String
    }
  }),
  actions: {
    login() {
      setToStorage('isLoggedIn', true)
      this.user.isLoggedIn = true
    },
    logout() {
      setToStorage('isLoggedIn', false)
      this.user.isLoggedIn = false
    },
    register(user) {
      this.user.push(user)
      console.log(user)
    }
  }
})
