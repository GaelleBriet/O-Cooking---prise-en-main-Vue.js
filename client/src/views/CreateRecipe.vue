<script setup>
import FormComponent from '../components/Form/FormComponent.vue'

const form = [
  { title: 'Titre', name: 'titre', placeholder: 'Titre de la recette', type: 'text' },
  {
    title: 'Temps de cuisson',
    name: 'temps_de_cuisson',
    placeholder: '10 minutes',
    type: 'number'
  },
  { title: 'Coût par personne', name: 'cout_par_personne', placeholder: '1€', type: 'number' },
  { title: 'Recette', name: 'recette', placeholder: 'Le texte de la recette', type: 'textarea' }
]
</script>

<template>
  <div class="main .recipe-form">
    <h2 class="title">Créer une recette</h2>
    <FormComponent :form="form" />
  </div>
</template>
