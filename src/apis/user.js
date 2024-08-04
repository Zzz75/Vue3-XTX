import request from '@/utils/http'

export const loginApi = ({account,password})=>{
   return request.post('/login',{account,password})
}
// 猜你喜欢
export const getLikeListAPI = ({ limit = 4 }) => {
   return request({
     url:'/goods/relevant',
     params: {
       limit 
     }
   })
 }