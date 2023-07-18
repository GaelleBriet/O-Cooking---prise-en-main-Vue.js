<script setup>
import { ref } from 'vue'

const props = defineProps({
  recipe: Object
})

const emit = defineEmits(['itemChange'])

const item = ref('')

const inputHandler = () => {
  console.log('item', item.value)
  emit('itemChange', { name: props.recipe.name, value: item.value })
}
</script>

<template>
  <div>
    <label :for="recipe.name" class="label">{{ recipe.title }}</label>
    <input
      :type="recipe.type"
      :name="recipe.name"
      :id="recipe.name"
      :placeholder="recipe.placeholder"
      class="input"
      v-model="item"
      v-on:input="inputHandler"
      v-if="recipe.type !== 'textarea'"
    />
    <textarea
      :name="recipe.name"
      :id="recipe.name"
      :placeholder="recipe.placeholder"
      v-model="item"
      v-on:input="inputHandler"
      v-else
    ></textarea>
  </div>
</template>

<style lang="scss" scoped>
input,
textarea {
  width: 500px;
  padding: 1rem;
}
input {
  margin: 0.5rem 0 1.5rem 0;
}
</style>
