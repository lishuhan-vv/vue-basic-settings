import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引入路由
import router from '@/router'
//引入vant
import { Button } from 'vant'
//移动端分辨率适配 rem
import 'lib-flexible/flexible'
//Vant 升级至 4.x 后，对主题色配置也非常友好，
//我们可以通过修改全局 CSS 变量 --van-primary-color 
//来控制 Vant 组件库的主题色。
import '@/common/style/theme.css'

//createApp(App).mount('#app')
// 初始化 Vue 实例
const app = createApp(App)
// 注册路由
app.use(router)
// 注册组件
app.use(Button)
// 挂载 Vue 实例
app.mount('#app')