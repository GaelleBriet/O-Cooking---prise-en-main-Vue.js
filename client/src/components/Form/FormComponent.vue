<script setup>
import InputComponent from './InputComponent.vue'

const props = defineProps({
  form: Array
})
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <InputComponent v-for="(item, i) in form" :key="i" :recipe="item" />
    <button type="submit">Créer la recette</button>
  </form>
</template>

<style lang="scss" scoped>
button {
  width: 500px;
  padding: 1rem;
}
</style>