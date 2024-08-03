// 封装倒计时函数
import {computed, ref} from 'vue'
import dayjs from 'dayjs'
export const useCountDown = ()=>{
    // 响应式数据
    const time = ref(0)
    // 格式化时间 为xx分xx秒
   const formatTime = computed({
        get(){
           return dayjs.unix(time.value).format('mm分ss秒')
        },
        set(value){
            time.value = value
        }

   })
    // 开启倒计时的函数
    const start = (currentTime)=>{
        // 开始倒计时的逻辑
        // 每隔一秒减一
        formatTime.value = currentTime
       setInterval(()=>{
            formatTime.value--
        },1000)
        // 如果当前时间小于等于0，则清除定时器
    }
    return {
        formatTime,
        start
    }
}