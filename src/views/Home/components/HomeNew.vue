<script setup>
import HomePena from './HomePanel.vue'
import { findNewApi } from '@/apis/home'
import {ref, onMounted} from 'vue'
// 获取新鲜好物数据
const findNewList = ref([])
const getFindNew = async () => {
  const res = await findNewApi()
  findNewList.value = res.result
}
onMounted(() => {
    getFindNew()
})

</script>

<template>
  <HomePena title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <!-- 主题插槽部分 -->
    <ul class="goods-list">
    <li v-for="item in findNewList" :key="item.id">
      <RouterLink to="/">
        <img :src="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
  </HomePena>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
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
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>