<template>
  <ChildView ref="childRef"></ChildView>
  <h3>{{ childRef }}</h3>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ChildView from './child.vue'

const childRef = ref(null)

onMounted(() => {
  console.log(childRef.value);
})
</script>

<style>

</style>