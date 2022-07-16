<template>
  <n-button type="primary" @click="callChange">点击触发父组件内msg</n-button>
  <ChildView :msg="msg"></ChildView>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildView from './child.vue'

const msg = ref('parent msg')

function callChange() {
  msg.value = '更新parent msg'
}
</script>

<style scoped lang="less">
</style>
