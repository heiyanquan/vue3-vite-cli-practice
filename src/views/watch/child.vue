<template>
  <h1>{{ msg }}</h1>
  <n-button type="primary" @click="callChange">点击触发子组件内watch</n-button>
  <h2>{{ obj.type }} 相加:{{ obj.addTitle }}</h2>
  <h3>{{ selectValue }}</h3>
</template>

<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue';
const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})
const obj = reactive({
  type: '初始type',
  addTitle: ''
})
const selectValue = ref('初始selectValue')

function callChange() {
  obj.type = '更新type'
  selectValue.value = '更新selectValue'
}

watch(() => props.msg, (newVal, oldVal) => {
  console.log('parent msg回调更新', newVal, oldVal);
})
watch(() => obj.type, (newVal, oldVal) => {
  console.log('监听obj', newVal, oldVal);
})
watch(selectValue, (newVal, oldVal) => {
  console.log('监听selectValue', newVal, oldVal);
})
watchEffect(() => {
  const title = `${props.msg}+${obj.type}`
  obj.addTitle = title
})

</script>

<style scoped lang="less">
</style>
