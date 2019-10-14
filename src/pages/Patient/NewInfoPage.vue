<template>
  <div class="NewInfoPage">
    <h2>{{NewInfo.title}}{{id}}</h2>
    <hr>
    <p>{{NewInfo.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'NewInfoPage',
  data () {
    return {
      id:this.$route.params.id,
      /* 创建根据Id发送请求获取新闻详情页面的假数据，渲染到页面上 ，在created钩子函数中发送请求*/
      NewInfo:{
          id:'1',
          title:"中国七十周年----",
          content:"北京日报客户端记者发现，自今年5月20日就开始“沉默”的ofo小黄车微信公众号突然于8月21日发布了一条推广文，名为《耗时1个月整理的英语资源！一次性全部分享给你，手慢无！》，这篇为英语机构推出的“广告”一小时阅读量迅速突破了10万+。"
        }
    }
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2{
    color: burlywood;
    text-align: center;
  }
  p{
    text-indent:2em;
  }
</style>
