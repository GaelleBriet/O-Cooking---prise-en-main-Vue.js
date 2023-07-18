<script setup>
import FormComponent from '../components/Form/FormComponent.vue'

const form = [
  { title: 'Titre', name: 'name', placeholder: 'Titre de la recette', type: 'text' },
  { title: 'Description', name: 'description', placeholder: 'Description', type: 'text' },
  { title: 'Ingrédients', name: 'ingredients', placeholder: 'Ingrédients', type: 'text' },
]
</script>

<template>
  <div class="main .recipe-form">
    <h2 class="title">Créer une recette</h2>
    <FormComponent :form="form" :inputsNumber="form.length"/>
  </div>
</template>
