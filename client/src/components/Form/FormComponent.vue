<script setup>
import InputComponent from './InputComponent.vue';

const props = defineProps({
  form: Array,
})
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <InputComponent v-for="(item, i) in form" :key="i" :recipe="item"/>
    <button type="submit">Créer la recett</button>
  </form>
</template>