import request from '@/utils/http'
// 获取订单接口
export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}