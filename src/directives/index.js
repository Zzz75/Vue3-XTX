import { useIntersectionObserver } from '@vueuse/core'
// 定义懒加载插件
export const lazyPlugin = {
    install (app) {
    // 懒加载指令逻辑
    // app.directive('img-lazy',{
    //     mounted(el, binding){
            // const {stop}=useIntersectionObserver(
            //     el,
            //     ([{ isIntersecting }]) => {
            //     if (isIntersecting) {
            //         el.src = binding.value
            //         stop()
            //     }
            //     },
            // )
    //     }
    //     })
    // }
    // 简化形式, 这会在 `mounted` 和 `updated` 时都调用
    app.directive('img-lazy',(el, binding)=>{
        const {stop}=useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
            if (isIntersecting) {
                el.src = binding.value
                stop()
            }
            },
        )
    })
 }
}