<template>
  <h1>子组件：{{ modelValue }}</h1>
  <n-button type="primary" @click="callButton">
    子组件点击触发
  </n-button>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])

function callButton() {
  emit('update:modelValue', 'child update name')
}
</script>

<style scoped lang="less">
</style>
