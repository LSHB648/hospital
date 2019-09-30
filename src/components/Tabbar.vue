<template>
    <div class="Tabbar">
        <van-tabbar v-model="active" fixed border route>
          <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>    
          <van-tabbar-item icon="search" to="/">搜索</van-tabbar-item>
          <van-tabbar-item icon="friends-o" dot to="/PersonalPage">个人中心</van-tabbar-item>
          <van-tabbar-item icon="setting-o" to="/">设置</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
        active: 0
    }
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
