<template>
  <n-button type="primary" @click="callButton">
    触发emit
  </n-button>
</template>

<script setup lang="ts">
const emit = defineEmits(['change'])

function callButton() {
  emit('change', 'aaa')
}
</script>

<style scoped lang="less">
</style>
