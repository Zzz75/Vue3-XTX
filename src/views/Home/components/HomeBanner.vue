<script setup>
import {ref,onMounted} from 'vue'
import { getBannerApi } from '@/apis/home'
const bennerList = ref([])

// 获取轮播图数据
const getBanner = async () => {
  const res = await getBannerApi()
  bennerList.value = res.result
}
onMounted(() => {
  getBanner()
})
</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bennerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>