<template>
  <div class="common-layout">
    <el-container style="height: 100%;">
      <!-- 左侧导航栏 -->
      <el-aside style="background-color: #81ecec;position: relative;width: auto;overflow:visible;">
        <el-button type="info" icon="Operation" style="position: absolute;top: 0;right: -50px;z-index: 33;"
          @click="isCollapse = !isCollapse" />
        <el-menu background-color="#7bed9f" :collapse="isCollapse" @select="handleSelect" unique-opened
          class="el-menu-vertical-demo" default-active="1-1">
          <el-sub-menu v-for="item in menu" :index="item.index">
            <template #title>
              <el-icon>
                <component :is='item.icon'></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="item in item.children" :index="item.index">{{ item.name }}</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main style="background:linear-gradient(135deg,#ff75c3,#ffa647,#ffe83f,#9fff5b,#70e2ff,#cd93ff);">
        <!-- 路由出口 -->
        <Suspense>
          <router-view></router-view>
        </Suspense>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { tabs, menu } from './tab'
const router = useRouter()
const isCollapse = ref(false)
const handleSelect = (key, keyPath) => {
  router.push(tabs[key])
}
</script>
<style scoped lang='scss'>
.common-layout {
  height: 100vh;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>