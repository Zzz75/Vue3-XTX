import axios from 'axios'
import { ElMessage } from 'element-plus'
import  router  from '@/router'
import { useUserStore } from '@/stores/userStore'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 20000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // 按照后端的要求拼接token数据
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if(token) config.headers.Authorization = `Bearer ${token}`
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  // 401 token错误
  if(e.response.data.status === 401) {
    // 清空pinia中的token数据
    const userStore = useUserStore()
    userStore.logout()
    // 跳转到登录页面
    router.push('/login')
  }
  // 统一错误提示
  ElMessage({ type: 'warning', message: e.response.data.message })
  return Promise.reject(e)
})


export default httpInstance