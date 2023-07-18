<script setup>

defineProps({
  recipe: Object,
})
</script>

<template>
  <div>
    <label :for="id" class="label">{{ recipe.name }}</label>
    <input :type="recipe.type" :name="recipe.name" :id="recipe.name" :placeholder="recipe.placeholder" />
  </div>
</template>