<template>
  <n-button @click="toUrl" type="primary">router demo</n-button>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log('router demo', route, router);

function toUrl() {
  router.push({
    path: '/home',
    query: {
      from: 'router'
    }
  })
}

</script>

<style scoped lang="less">
</style>
