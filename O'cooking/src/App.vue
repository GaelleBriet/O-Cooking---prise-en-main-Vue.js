<script setup>
import HeaderComponent from './components/layout/HeaderComponent.vue'
import FooterComponent from './components/layout/FooterComponent.vue'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isLoggedIn = ref(false)
const login = () => {
  isLoggedIn.value = true
}
const logout = () => {
  isLoggedIn.value = false
}
console.log('est connecté : ', isLoggedIn.value)
</script>

<template>
  <HeaderComponent />
  <RouterView :isLoggedIn="isLoggedIn" @login="login" @logout="logout" />
  <FooterComponent />
</template>

<style lang="scss"></style>
