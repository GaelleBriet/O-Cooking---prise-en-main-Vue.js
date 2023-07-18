<script setup>
import CommentComponent from '../Comment/CommentComponent.vue'

defineProps({
  comments: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="main">
    <h3>Commentaires ({{ comments.length }}) :</h3>
    <template v-if="comments.length">
      <ul>
        <CommentComponent v-for="comment in comments" :key="comment.id" :comment="comment" />
      </ul>
    </template>
    <p v-else>Aucun commentaire pour cette recette.</p>
  </div>
</template>

<style scoped>
h3 {
  text-align: left;
  margin: 1rem;
  font-weight: bold;
  /* text-transform: uppercase; */
  padding-top: 2rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
