<template>
  <h1>{{ name }}</h1>
  <n-button type="primary" @click="callButton">
    父组件点击触发
  </n-button>
  <ChildView v-model="name"></ChildView>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildView from './child.vue'

const name = ref('parent init name')

function callButton() {
  name.value = 'parent update name'
}
</script>

<style>

</style>