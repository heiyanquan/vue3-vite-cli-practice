<template>
  <ChildView msg="parent msg" @change="change"></ChildView>
  <h1>{{ emitInfor }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildView from './child.vue'

const emitInfor = ref('')

function change(val: string) {
  console.log('emit', val);
  emitInfor.value = val
}
</script>

<style>

</style>