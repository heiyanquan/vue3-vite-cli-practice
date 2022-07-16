<template>
  <div class="navigation_page_wrapper">
    <div v-for="(item, index) in navList" :key="item.label" :style="{ background: colorList[index] }" @click="toUrl(item.path)">
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const navList = ref([
  { label: 'home', path: '/home' },
  { label: 'attr', path: '/attr' },
  { label: 'emit', path: '/emit' },
  { label: 'expose', path: '/expose' },
  { label: 'props', path: '/props' },
  { label: 'setup', path: '/setup' },
  { label: 'vModel', path: '/vModel' },
  { label: 'watch', path: '/watch' },
  { label: 'router', path: '/router' },
  { label: 'module_id', path: '/module_id' },
  { label: 'vnode-optimize', path: '/vnodeOptimize' },
  { label: 'vnode-normal', path: '/vnodeNormal' },
  { label: 'vnode-old', path: '/vnodeOld' },
  { label: 'iframe-company-Detail', path: '/companyDetail' },
  { label: 'gaode', path: '/gaode' },
  { label: 'drag', path: '/drag' },
])
const colorList = ref([
  '#46A0FF',
  '#FFC64C',
  '#63E587',
  '#FA885D',
  '#7BF0EB',
  '#F277E1',
  '#FF7B7B',
  '#728EFE',
  '#E1EC9E',
  '#8F2EFF',
  '#8DEEFF',
  '#7C69F2',
  '#CCF6B5',
  '#EE8989',
  '#84B2FF',
  '#80E5C4'
])
function toUrl(path: string) {
  router.push(path)
}
</script>
<style lang="less">
.navigation_page_wrapper {
  display: flex;
  flex-wrap: wrap;
  div {
    width: 200px;
    height: 200px;
    text-align: center;
    color: white;
    font-size: 30px;
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
</style>
