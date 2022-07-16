import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

window.AMapLoader.load({
  key: '60fdb942e15dfeefff0d5595c58a8de3', // 申请好的Web端开发者Key，首次调用 load 时必填
  version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  plugins: ['AMap.DistrictLayer', 'AMap.HeatMap', 'AMap.DistrictSearch', 'AMap.Marker', 'AMap.Text', 'AMap.MarkerCluster'],
  AMapUI: {
    // 是否加载 AMapUI，缺省不加载
    version: '1.1', // AMapUI 版本
    plugins: ['overlay/SimpleMarker'] // 需要加载的 AMapUI ui插件
  },
  Loca: {
    // 是否加载 Loca， 缺省不加载
    version: '2.0' // Loca 版本
  }
})
  .then((AMap) => {
    window.AMap = AMap
    const app = createApp(App).use(router).use(store)
    app.mount('#app')
    app.config.globalProperties.emptyText = '--'
  })
  .catch((e) => {
    console.log(e) // 加载错误提示
  })
