<template>
  <h2>expose child count {{ count }}</h2>
  <h3>expose child type {{ type }}</h3>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(123)
const type = ref<string>('park')

defineExpose({
  count,
})
</script>

<style scoped lang="less">
</style>
