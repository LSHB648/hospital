<template>
  <div class="NavBar">
    <!-- <h1>这是父组件</h1>
    <Index v-bind:parentmsg="groceryList" v-on:ListenToChildEvent="ShowMsgChild"></Index>
    <li v-for="item in FatherList" :key="item.id">
        {{item.text}}
    </li> -->
    <van-nav-bar
      title="医院在线挂号系统"
      left-arrow
      v-bind:left-arrow="leftshow"
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
      id="navbar"
    >
    <a slot="right">{{Login}}</a>
    <div slot="right" v-if='this.$store.state.loginCookie'>
      <a>{{this.$store.state.Userinfo.Name}}</a>
    </div>
    <div slot="right" v-else-if>
    </div>
    </van-nav-bar>
  </div>
</template>

<script>
import IndexPage from '../pages/Patient/IndexPage.vue';
export default {
  name: 'NavBar',
  components: {
      IndexPage: IndexPage
  },
  data () {
    return {
     /*  groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ],
    FatherList:[] */
    leftshow:false,
    Login:'登录',
    Loginout:'退出',
    }
  },
  methods: {
    /* ShowMsgChild:function(data){
      this.FatherList=data;
    } */
    onClickLeft() {
      this.$toast('返回');
      this.$router.go(-1);
    },
    onClickRight() {
      if(this.$store.getters.getterCookie){
        this.$router.push({name: 'PersonalPage'});
      }else{
        this.$toast('登录');
        this.$router.push({name: 'LoginPage'});
      }
      
      /*this.Login=''; 登录界面设置登录按钮不可见 */
      /* this.Login=this.$store.getters.getterCookie; */
    }
    /* isCookie(){
      if(this.$store.state.loginCookie){
        this.Login=this.$store.state.loginCookie;
      }
    } */
  },
  watch:{
    /* 监听路由设置首页返回按钮不可见 */
    $route(to,from){
      if(to.path=="/IndexPage"){
        this.leftshow=false;
      }else{
        this.leftshow=true;
      }
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .van-nav-bar__arrow {
    min-width: 1em;
    font-size: 16px;
    /* display: none; */
  }
  a:hover{color:red;}
</style>
