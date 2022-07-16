<template>
  <h1>count:{{ count }}</h1>
  <h2>msg:{{ state.msg }}</h2>
  <h3>computed:{{ double }}</h3>
  <n-button type="primary" @click="changeState">click button</n-button>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(1)
    const state = reactive({
      msg: 'init'
    })

    const double = computed(() => count.value * 2)

    function changeState() {
      count.value = 6
      state.msg = 'update'
    }
    watch(count, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    })

    return {
      count,
      state,
      double,
      changeState
    }
  },
})
</script>
