import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//路径别名
import { fileURLToPath, URL } from 'node:url'
//引入 Vant UI 组件库
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  //修改开发环境的启动端口号为 8080
  server: {
    port: 8080
  },
  plugins: [
    vue(),
    Components({ resolvers: [VantResolver()] })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
