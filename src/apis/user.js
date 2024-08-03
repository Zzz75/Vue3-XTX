import request from '@/utils/http'

export const loginApi = ({account,password})=>{
   return request.post('/login',{account,password})
}