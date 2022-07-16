<template>
  <LightView :industry-chain="industryChain" @node-click="nodeClick"></LightView>
</template>

<script setup lang="ts">
import LightView from './light.vue'
import { companyChainData, talentChainData, patentChainData } from './useChain'

const tabList = reactive([
  {
    label: '企业数',
    data: companyChainData
  },
  {
    label: '人才数',
    data: talentChainData
  },
  {
    label: '专利数',
    data: patentChainData
  },
  {
    label: '关键技术数',
    data: talentChainData
  }
])
const tabIndex = ref(0)
const industryChain = ref({})
function tabChange(index: number) {
  tabIndex.value = index
  industryChain.value = tabList[tabIndex.value].data
}

function nodeClick() {
  console.log('open modal')
  provide('showModal', '')
}

onMounted(() => {
  tabChange(tabIndex.value)
})
</script>
<style lang="less">
.light_wrapper {
  width: 1870px;
  height: 800px;
  background: #ffffff;
}
</style>
