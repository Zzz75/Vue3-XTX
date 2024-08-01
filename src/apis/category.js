import request from '@/utils/http'

export const getCategoryApi = (id)=> {
    return request.get('/category',{params:{id}})

}
// 二级分类列表数据
export const getCategoryFilterAPI = (id)=> {
    return request.get('/category/sub/filter',{params:{id}})

}
/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
   export const getSubCategoryAPI = (data) => {
    return request({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }