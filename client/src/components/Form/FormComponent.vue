<script setup>
import InputComponent from './InputComponent.vue'

const props = defineProps({
  form: Array
})
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <InputComponent v-for="(item, i) in form" :key="i" :recipe="item" />
    <input class="submit" type="submit" value="Sauvegarder" />
  </form>
</template>

<style lang="scss" scoped>

input {
  width: 500px;
  padding: 1rem;
}
</style>
