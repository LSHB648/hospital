<template>
  <div class="NewListPage">
        <!-- closeable 模式，在右侧显示关闭按钮 -->
        <van-notice-bar left-icon="volume-o" mode="closeable" scrollable>
          【向“共和国勋章”获得者致敬！】于敏、申纪兰、孙家栋、李延年、张富清、袁隆平、黄旭华、屠呦呦被授予
          “共和国勋章”。这些闪亮的名字，值得我们永远铭记！转发致敬功勋！
        </van-notice-bar>
        <van-card
          tag="hot"
          lazy-load
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          v-for="item in Newmsg" 
          :key="item.id"
          @click="getDetailnews(item.id)"
        >
        <div slot="tag" v-show="item.tag=='Hot'">
          <van-tag class="van-tag van-tag--mark van-tag--danger">{{item.tag}}</van-tag>
        </div>
        <div slot="title">
          <span>{{item.title}}</span>
        </div>
        <div slot="desc">
          <span>{{item.desc}}</span>
        </div>
        <div slot="footer">
          <span>新闻发表时间</span>
        </div>
        </van-card>
  </div>
</template>

<script>
export default {
  name: 'NewListPage',
  data () {
    return {
      /* 自定义的假数据，以后需要从服务端请求数据，在created钩子函数下发送请求并在data中接收渲染到页面上 */
      Newmsg:[
        {
          id:'1',
          tag:"Hot",
          title:"中国七十周年",
          desc:"中国很热闹"
        },
        {
          id:'2',
          tag:"Hot",
          title:"中国七十周年",
          desc:"中国很热闹"
        },
        {
          id:'3',
          tag:"Hot",
          title:"中国七十周年",
          desc:"中国很热闹"
        },
        {
          id:'4',
          title:"中国七十周年",
          desc:"中国很热闹"
        },
        {
          id:'5',
          title:"中国七十周年",
          desc:"中国很热闹"
        },
        {
          id:'6',
          title:"中国七十周年",
          desc:"中国很热闹"
        },
        {
          id:'7',
          title:"中国七十周年",
          desc:"中国很热闹"
        },
        {
          id:'8',
          title:"中国七十周年",
          desc:"中国很热闹"
        }
      ]
    }
  },
  methods:{
    /* 进入新闻详情页面 */
    getDetailnews:function(NewId){
      console.log("点击了新闻"+NewId);
      this.$router.push('/NewListPage/NewInfoPage'+'/'+NewId);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .van-card__title{
    font-family:Arial, Helvetica, sans-serif;
  }
  .title{
    font-size: larger;
    color: #121113;
    border: 0px;
  }
</style>