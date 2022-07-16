<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})
console.log('props', props);
</script>

<style scoped lang="less">
</style>
