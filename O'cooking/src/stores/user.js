// import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', {
  state: () => { 
    return {
      isLoggedIn: true, 
    }
  },
})


// export const useUserStore = defineStore('user', () => {
//   const isLoggedIn = ref(true)

//   return {
//     isLoggedIn
//   }
// })