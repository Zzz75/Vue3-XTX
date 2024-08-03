// 封装购物车模块
import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { useUserStore } from './userStore'
import { delCartAPI, getNewCartAPI, insertCartAPI } from "@/apis/cart"
export const useCartStore = defineStore('cart',()=>{
    const userStore = useUserStore()

    // 判断是否登录
   const isLogin = computed(()=>userStore.userInfo.token)


    // 定义管理购物车数据的state
    const cartList = ref([])

     // 获取最新列表action
     const updateNewList =async ()=>{
        const res = await getNewCartAPI()
        cartList.value = res.result
    }

    // 定义添加购物车数据的action函数
    const addCart =async (goods)=>{
        if(isLogin.value){
            // 登录加入购物车逻辑
           await insertCartAPI(goods)
           updateNewList()
        }else{
            // 未登录逻辑
            // 已追加过--count+1
            const item = cartList.value.find(item=>item.skuId === goods.skuId)
            if(item){
                // 找到了
                item.count++
            }else{
                // 没找到
                cartList.value.push(goods)
            }
        }
        
    }

    // 删除购物车
    const delCart =async (skuId)=>{
        if(isLogin.value){
            // 登录删除逻辑 -调接口
           await delCartAPI([skuId])
           updateNewList()
        }else{
            // 未登录删除逻辑
            cartList.value = cartList.value.filter(item=>item.skuId !== skuId)
        }
    }
    // 清除购物车
    const clearCart =()=>{
        cartList.value = []
    }
    // 总数量
   const totalCount = computed(()=>{
        return cartList.value.reduce((total,item)=>{
            return total + item.count
        },0)
    })

    // 总价格
    const totalPrice = computed(()=>{
        return cartList.value.reduce((total,item)=>{
            return total + item.count * item.price
        },0)
    })

    // 单选功能
    const singleCheck = (skuId,selected)=>{
        const item = cartList.value.find(item=>item.skuId === skuId)
        item.selected = selected
    }

    // 已经选择的数量
    const selectedCount = computed(()=>{
        return cartList.value.reduce((total,item)=>{
            return item.selected ? total + item.count : total
        },0)
    })

    // 已选择的总价
    const selectedPrice = computed(()=>{
        return cartList.value.reduce((total,item)=>{
            return item.selected ? total + item.count * item.price : total
        },0)
    })

    // 是否全选
    const isAllSelected = computed(()=>{
        return cartList.value.every(item=>item.selected)
    })

    // 全选功能
    const selectAll = (selected)=>{
        cartList.value.forEach(item=>{
            item.selected = selected
        })
    }
    // return state action
    return {
        cartList,
        addCart,
        delCart,
        totalCount,
        totalPrice,
        singleCheck,
        selectedCount,
        selectedPrice,
        isAllSelected,
        selectAll,
        clearCart,
        updateNewList
    }
},
{
    persist:true
})