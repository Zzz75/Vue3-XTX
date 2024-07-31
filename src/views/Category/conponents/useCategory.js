// 封装分类数据
import { getCategoryApi } from '@/apis/category'
import { onMounted,ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router';
import { useRoute } from 'vue-router'

export const useCategory = () => {
    // 获取数据
    const categoryList = ref({})    
    // 获取路由参数
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryApi(id)
        categoryList.value = res.result
    }
    onMounted(() => {
        getCategory()
    })
    // 路由变化时获取分类数据
    onBeforeRouteUpdate((t) => {
        // console.log(t);
        getCategory(t.params.id)
    })
    return {
        categoryList
    }

}