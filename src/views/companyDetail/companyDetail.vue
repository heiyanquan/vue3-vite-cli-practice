<template>
  <n-button @click="callCompanyDetail">call company detail</n-button>
  <iframe v-show="showIframe" id="companyDetailFrame" :src="iframeUrl" frameborder="0"></iframe>
</template>

<script setup lang="ts">
import { shallowRef, ref, nextTick } from 'vue'

const iframeUrl = shallowRef('https://popup-demo-company-detail.aihuoshi.net')
const showIframe = ref(false)

async function callCompanyDetail() {
  showIframe.value = true
  await nextTick()
  const companyDetailFrame = document.getElementById('companyDetailFrame').contentWindow
  companyDetailFrame.postMessage({
    company_id: 'c584fdd8c77e793b3173e0fa04f4cace',
    tabList: ['工商信息', '企业评估', '发展报告', '风险监测', '知识产权', '企业动态']
  }, '*')
}
</script>

<style lang="less">
iframe {
  width: 100%;
  height: 100%;
}
</style>
