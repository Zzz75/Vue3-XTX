import httpInstance from '@/utils/http'
// 获取banner
export const getBannerApi = (params = {}) => {
  const  { distributionSite='1'} = params
  return httpInstance.get('/home/banner', { params:{distributionSite}})
}
// 获取新鲜好物
export const findNewApi = () => {
  return httpInstance.get('/home/new')
}
// 获取人气推荐
export const findHotApi = () => {
  return httpInstance.get('/home/hot')
}
// 获取商品
export const getGoodsApi = () => {
  return httpInstance.get('/home/goods')
}