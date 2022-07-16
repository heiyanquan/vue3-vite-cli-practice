<template>
  <ChildView
    :page-count="60"
    show-size-picker
    show-quick-jumper
    :page-sizes="[10, 20, 30, 40]"
    @update:page="changePage"
  >
  </ChildView>
</template>

<script setup lang="ts">
import ChildView from './child.vue'

function changePage(value) {
  console.log('changePage', value);
  
}
</script>

<style lang="less">
</style>
