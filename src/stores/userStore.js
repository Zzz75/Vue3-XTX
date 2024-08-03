// 管理用户数据相关
import { loginApi } from "@/apis/user"
import { defineStore } from "pinia"
import { ref } from "vue"
import { useCartStore } from "./cartStore"
import { mergeCartAPI } from "@/apis/cart"
export const useUserStore = defineStore('user',()=>{
    const cartStore = useCartStore()
    // 定义管理用户数据的state
    const userInfo = ref({})

    // 定义获取接口数据的action函数
    const gerUserInfo = async(form)=>{
       const res =  await loginApi(form)
       userInfo.value = res.result
    
    //    合并购物车的操作
   await mergeCartAPI(cartStore.cartList.map(item=>{
        return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
        }
    }))
    cartStore.updateNewList
    }
    // 退出登录
    const logout = ()=>{
        userInfo.value = {}
        // 执行清除购物车
        cartStore.clearCart()
    }
    
    // 以对象的格式把state和action return
    return {
        userInfo,
        gerUserInfo,
        logout
    }
},
{
    // 开启数据持久化
    persist:true
}
)
