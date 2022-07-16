import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite' //按需自动加载依赖包

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    //自动加载依赖
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', 'pinia'],
      //需要按需自动引入的依赖包
      dts: 'src/auto-import.d.ts'
      //选择auto-import.d.ts生成的位置'
    }),
    WindiCSS()
  ],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      components: pathResolve('./src/components'),
      api: pathResolve('./src/api'),
      assets: pathResolve('./src/assets'),
      utils: pathResolve('./src/utils'),
      router: pathResolve('./src/router'),
      store: pathResolve('./src/store'),
      views: pathResolve('./src/views'),
      static: pathResolve('./public/static')
    }
  },
  server: {
    open: true
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ['echarts'],
          naiveChunk: ['@vicons/ionicons5', 'element-plus']
        }
      }
    }
  }
})
