<template>
  <el-row>
    <ChildView @change="change"></ChildView>
  </el-row>
</template>

<script setup lang="ts">
import ChildView from './child.vue'

function change(val: string) {
  console.log('emit', val);
}
</script>

<style scoped lang="less">
</style>
