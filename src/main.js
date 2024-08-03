import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
// 引入懒加载指令
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'
// 引入elmessage
import 'element-plus/theme-chalk/el-message.css'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(lazyPlugin)
app.use(componentPlugin)
app.use(pinia)
app.use(router)

app.mount('#app')


