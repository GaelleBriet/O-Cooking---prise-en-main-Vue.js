<script setup>
import InputComponent from './InputComponent.vue'
import { useRecipesStore } from '../../stores/recipes'
import { useRouter } from 'vue-router'
import { ref, computed, reactive } from 'vue'

const router = useRouter()
const recipeStore = useRecipesStore()

const props = defineProps({
  form: Array,
  inputsNumber: Number
})

const inputsForm = reactive({})

const changeItem = (obj) => {
  inputsForm[obj.name] = obj.value
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <InputComponent v-for="(item, i) in form" :key="i" :recipe="item" @item-change="changeItem" />
    <input class="submit" type="submit" value="Sauvegarder" />
  </form>
</template>

<style lang="scss" scoped>
input {
  width: 500px;
  padding: 1rem;
}
</style>
