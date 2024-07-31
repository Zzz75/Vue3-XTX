<script setup>
import HomePena from './HomePanel.vue'
import { findHotApi } from '@/apis/home'
import {ref, onMounted} from 'vue'
// 获取新鲜好物数据
const findHotList = ref([])
const getHot = async () => {
  const res = await findHotApi()
  findHotList.value = res.result
}
onMounted(() => {
    getHot()
})
</script>

<template>
  <HomePena title="人气推荐" subTitle="人气爆款 不容错过">
    <ul class="goods-list">
    <li v-for="item in findHotList" :key="item.id">
      <RouterLink to="/">
        <img v-img-lazy="item.picture" alt="item.alt" />
        <p class="name">{{ item.name }}</p>
      </RouterLink>
    </li>
  </ul>
  </HomePena>

</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>