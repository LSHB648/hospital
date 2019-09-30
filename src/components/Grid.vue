<template>
  <div class="Grid">
        <van-grid :column-num="3">
            <van-grid-item icon="location" text="新闻资讯" to="/NewListPage"/>
            <van-grid-item icon="browsing-history" text="医院介绍" to="/HospitalPage"/>
            <van-grid-item icon="fire" text="预约挂号" to="/NewListPage"/>
            <van-grid-item icon="manager" text="个人中心" to="/PersonalPage"/>
            <van-grid-item icon="comment" text="留言评论" to="/CommentPage"/>
            <van-grid-item icon="service" text="联系我们" to="/NewListPage"/>
        </van-grid>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  data () {
    return {
     
    }
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Grid{
      margin-top: 0px;
    }
</style>
