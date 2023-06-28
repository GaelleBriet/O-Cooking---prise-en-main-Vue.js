<script setup>
import HeaderComponent from './components/layout/HeaderComponent.vue'
import FooterComponent from './components/layout/FooterComponent.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style lang="scss"></style>
