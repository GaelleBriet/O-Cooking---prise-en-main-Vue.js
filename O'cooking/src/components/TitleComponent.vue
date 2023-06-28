<script setup>
defineProps({
  title: String,
  className: String
})
</script>

<template>
  <h2 :className="className">{{ title }}</h2>
</template>

<style scoped lang="scss">
h2 {
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
}
</style>
