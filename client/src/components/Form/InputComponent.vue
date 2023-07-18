<script setup>
defineProps({
  recipe: Object
})
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
      v-if="recipe.type !== 'textarea'"
    />
    <textarea
      :name="recipe.name"
      :id="recipe.name"
      :placeholder="recipe.placeholder"
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
