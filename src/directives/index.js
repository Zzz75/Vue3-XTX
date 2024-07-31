import { useIntersectionObserver } from '@vueuse/core'
// 定义懒加载插件
export const lazyPlugin = {
    install (app) {
    // 懒加载指令逻辑
    app.directive('img-lazy',{
        mounted(el, binding){
            const {stop}=useIntersectionObserver(
                el,
                ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    el.src = binding.value
                    stop()
                }
                },
            )
        }
        })
    }
 }