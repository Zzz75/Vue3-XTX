import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入懒加载指令
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'
const app = createApp(App)
app.use(lazyPlugin)
app.use(componentPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')


