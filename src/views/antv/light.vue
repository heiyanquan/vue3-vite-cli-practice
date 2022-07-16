<template>
  <div id="container" class="light_wrapper"></div>
</template>

<script setup lang="ts">
import useIndented from './useIndented'

const props = defineProps({
  industryChain: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const emit = defineEmits(['nodeClick'])

watch(
  () => props.industryChain,
  (newVal) => {
    useIndented('container', newVal, (e) => {
      emit('nodeClick', e)
    })
  }
)
</script>
<style lang="less">
.light_wrapper {
  width: 1870px;
  height: 800px;
  background: #ffffff;
}
</style>
