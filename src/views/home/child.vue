<template>
  <div>child</div>
  <n-button type="primary" @click="callButton">触发emit</n-button>
</template>

<script setup lang="ts">
import useFirst from './use-first'

const { callButton } = useFirst()
</script>

<style></style>
