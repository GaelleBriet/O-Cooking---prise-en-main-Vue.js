import { defineStore } from 'pinia'
import {
  getFromStorage,
  setToStorage,
  removeFromStorage
} from '../Services/Helpers/useLocalStorage'
//import { reactive } from 'vue'
import axios from 'axios'

export const useUserStore = defineStore('users', {
  state: () => ({
    user: {
      isLoggedIn: getFromStorage('isLoggedIn') || false,
      username: '',
      id: null
    },
    users: []
  }),
  actions: {
    login() {
      setToStorage('isLoggedIn', true)
      this.user.isLoggedIn = true
      this.user.id = Math.floor(Math.random() * 28) + 1
      console.log(this.user.id)
      // this.user.firstName = 'John'
      // this.user.lastName = 'Doe'
      // this.user.id = 1
    },

    logout() {
      setToStorage('isLoggedIn', false)
      removeFromStorage('username')
      this.user.isLoggedIn = false
      this.user.username = ''
      this.user.id = null
    },
    register(user) {
      this.users.push(user)
      console.log(user)
    },

    async loginUser(password) {
      if (password === 'pass') {
        this.user.id = Math.floor(Math.random() * 28) + 1
        try {
          const { data } = await axios.get(
            `http://gaellebriet-server.eddi.cloud:8090/users/${this.user.id}`
          )
          this.user.username = data.username
          this.user.isLoggedIn = true
          setToStorage('username', this.user.username)
          return {
            success: true,
            message: `Authentification réussie avec l'utilisateur ${this.user.username}.`
          }
        } catch (error) {
          console.error(error)
          return { success: false, message: 'Le mot de passe est érroné' }
        }
      }
      return { success: false, message: 'Le mot de passe fourni est incorrect.' }
    }
  }
})
