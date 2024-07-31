// 封装benner轮播图
import { getBannerApi } from '@/apis/home'
import { ref,onMounted } from 'vue'
export const useBanner = () => {
const bennerList = ref([])
const getBanner = async () => {
const res = await getBannerApi({
    distributionSite: '2'
    })
    bennerList.value = res.result
}
onMounted(() => {
    getBanner()
})
return {
    bennerList
}

}