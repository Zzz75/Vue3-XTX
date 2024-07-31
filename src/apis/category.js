import request from '@/utils/http'

export const getCategoryApi = (id)=> {
    return request.get('/category',{params:{id}})

}
// 二级分类列表数据
export const getCategoryFilterAPI = (id)=> {
    return request.get('/category/sub/filter',{params:{id}})

}