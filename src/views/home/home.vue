<template>
  <n-grid x-gap="12" :cols="2">
    <ChildView @change="change"></ChildView>
  </n-grid>
</template>

<script setup lang="ts">
import ChildView from './child.vue'

function change(val: string) {
  console.log('emit', val);
}
</script>

<style scoped lang="less">
</style>
