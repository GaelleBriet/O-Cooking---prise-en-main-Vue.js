<script setup>
defineProps({
  comment: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <li class="comment">
    <p>
      <strong>{{ comment.user?.username || 'Anne Onyme' }}</strong>
    </p>
    <p>{{ comment.message }}</p>
  </li>
</template>

<style>
.comment {
  border-radius: 4px;
  margin: 1rem;
  padding: 1rem;
  text-align: left;
  background-color: #f0f4ee;
}
</style>
