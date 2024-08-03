<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFix from './components/LayoutFix.vue'
import {useCategoryStore} from '@/stores/categoryStore'
import {onMounted} from 'vue'
const useCategory = useCategoryStore()
onMounted(() => {
  useCategory.getCategory()
})
</script>
<template>
  <LayoutFix />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key强制销毁 -->
    <!-- <RouterView :key="$route.fullPath" /> -->
    <RouterView />
  <LayoutFooter />
</template>