<template>
  <div class="app-container">
      <div>
        <!-- 顶部Header导航栏 -->
        <NavBar></NavBar>
        <!-- 中间路由Router-view区域 -->
        <transition>
          <router-view class="containercenter"></router-view>
        </transition>
        <!-- 底部Tabbar导航栏 -->
        <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Tabbar from './components/Tabbar.vue';
export default {
  name: 'App',
  components: {
      NavBar: NavBar,
      Tabbar: Tabbar
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container{
  overflow-x: hidden;/* 导航栏X轴浮动隐藏 */
  position: relative;
}
.containercenter{
  margin-top: 46px;
  margin-bottom: 50px;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-50%);
  position: absolute;
}

.v-enter-active,
.v-leave-acrive{
  transition: all 0.45s ease;
}
</style>
