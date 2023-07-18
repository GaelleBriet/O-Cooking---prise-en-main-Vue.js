<script setup>
import InputComponent from './InputComponent.vue'
import { useRecipesStore } from '../../stores/recipes'
import { useUserStore } from '../../stores/user'
import { useRouter } from 'vue-router'
import { ref, watch, reactive } from 'vue'

const router = useRouter()
const recipeStore = useRecipesStore()
const errorMessage = ref('')
const loaddingMessage = ref('')
const showLoading = ref(false)
const showError = ref(false)
const userStore = useUserStore()

const props = defineProps({
  form: Array,
  inputsNumber: Number
})

const inputsForm = reactive({
  user_id: 1
})

const changeItem = (obj) => {
  inputsForm[obj.name] = obj.value
}

// const displayError = (message) => {
//   errorMessage.value = message
//   showError.value = true

//   setTimeout(() => {
//     showError.false
//     errorMessage.value = ''
//   }, 2000)
// }

// const displayLoading = (message) => {
//   loaddingMessage.value = message
//   showLoading.value = true

//   setTimeout(() => {
//     showLoading.false
//     errorMessage.value = ''

//     router.push()
//   }, 2000)
// }

const handleSubmit = () => {
  recipeStore.addOneRecipeFromService(inputsForm)
  router.push('/')
}

// watch(inputsForm, (val) => {
//   console.log('change in inputs form', val)
// })
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <InputComponent v-for="(item, i) in form" :key="i" :recipe="item" @item-change="changeItem" />
    <input class="submit" type="submit" value="Sauvegarder" />

    <div class="message-container">
      <p v-if="showError" class="error-message">{{ errorMessage }}</p>
      <p v-if="showLoading" class="loading-message">{{ loaddingMessage }}</p>
    </div>
  </form>
</template>

<style lang="scss" scoped>
input {
  width: 500px;
  padding: 1rem;
}
</style>
