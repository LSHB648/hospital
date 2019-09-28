<template>
  <div id="app">
      <!-- 顶部Header导航栏 -->
      <NavBar></NavBar>
      <!-- 中间路由Router-view区域 -->
      <router-view />
      <!-- 底部Tabbar导航栏 -->
      <Tabbar></Tabbar>
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
</style>
