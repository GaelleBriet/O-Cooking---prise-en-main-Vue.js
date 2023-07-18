import { defineStore } from 'pinia'
import { getFromStorage, setToStorage } from '../Services/Helpers/useLocalStorage'
//import { reactive } from 'vue'

export const useUserStore = defineStore('users', {
  state: () => ({
    user: {
      isLoggedIn: getFromStorage('isLoggedIn') || false,
      firstName: String,
      lastName: String,
      id: Number
    },
    users: []
  }),
  actions: {
    login() {
      setToStorage('isLoggedIn', true)
      this.user.isLoggedIn = true
      this.user.firstName = 'John'
      this.user.lastName = 'Doe'
      this.user.id = 1
    },
    logout() {
      setToStorage('isLoggedIn', false)
      this.user.isLoggedIn = false
      this.user.firstName = ''
      this.user.lastName = ''
      this.user.id = ''
    },
    register(user) {
      this.users.push(user)
      console.log(user)
    }
  }
})
