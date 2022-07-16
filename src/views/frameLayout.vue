<template>
  <NavView v-show="!hiddenNav"></NavView>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavView from '@/components/nav.vue'

const route = useRoute()
const hiddenNav = ref(false)

watch(
  () => route,
  (newVal) => {
    if (newVal.meta.hiddenNav) {
      hiddenNav.value = true
    } else {
      hiddenNav.value = false
    }
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style lang="less"></style>
