<template>
    <div class="Tabbar">
        <van-tabbar v-model="active" fixed border>
            <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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
