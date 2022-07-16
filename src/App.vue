<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <LoadingContent />
      <n-dialog-provider>
        <n-message-provider>
          <MessageContent />
          <router-view />
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { NConfigProvider, zhCN, dateZhCN, NMessageProvider, NLoadingBarProvider, GlobalThemeOverrides } from 'naive-ui'
import MessageContent from '@/components/MessageContent.vue'
import LoadingContent from '@/components/LoadingContent.vue'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    tableHeaderColor: 'rgba(37, 70, 133, 1)'
  },
  DataTable: {
    borderColor: 'rgba(37, 70, 133, 1)',
    tdColorHover: 'rgba(8, 83, 138, 1)',
    tdColorStriped: 'rgba(37, 70, 133, 1)',
    thColor: 'rgba(37, 70, 133, 1)',
    tdColor: '#183675',
    tdTextColor: 'rgba(208, 255, 255, 1)',
    loadingColor: '#D0E1FF'
  },
  Pagination: {
    buttonColor: '#254685',
    buttonIconColor: '#D0E1FF',
    buttonColorHover: '#05D2FF',
    buttonColorPressed: '#817171',
    buttonBorder: '1px solid #254685',
    buttonBorderHover: '1px solid #05D2FF',
    itemTextColor: 'rgba(255, 255, 255, 1)',
    itemTextColorHover: '#05D2FF',
    itemTextColorActive: '#05D2FF',
    itemTextColorDisabled: '#D0E1FF',
    itemColor: '#D0E1FF',
    itemColorActive: '#D0E1FF',
    itemColorDisabled: '#254685',
    itemBorder: '1px solid #254685',
    itemBorderHover: '1px solid #05D2FF',
    itemBorderActive: '1px solid #05D2FF',
    itemBorderDisabled: '#254685',
    jumperTextColor: '#D0E1FF'
  }
}
</script>

<style lang="less">
@import url('./styles/reset.less');
html,
body {
  scroll-behavior: smooth;
}
</style>
