<template>
  <div class="PersonalPage">
    <div class="myinfo">
      <div class="info-position">
        <!-- <img class="user-poster" src="../../static/images/2.jpg"> -->
        <van-image
          width="60"
          height="60"
          round
          fit="contain"
          lazy-load
          src="../../../static/images/2.jpg"
        />
        <p v-if='this.$store.state.loginCookie'>
          {{Name}}
        </p>
        <p v-else>
          未登录..
        </p>
      </div>
    </div>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        已预约
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待就诊
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待支付
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        评价
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="points" title="我的信息" is-link @click="toUserInfo"/>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="records" title="药品清单" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的消息" is-link />
    </van-cell-group>
    <div v-show='this.$store.state.loginCookie'>
      <button id='LoginOut' type="button" data-loading-text="提交中"  class="mui-btn mui-btn-block mui-btn-danger" @click="LoginOut">退出登录</button>
    </div>
    
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
  name: 'PersonalPage',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data () {
    return {
     Name:this.$store.state.Userinfo.Name
    }
  },
  methods: {
    LoginOut() {
      let that=this;
      var ws = new WebSocket('ws://192.168.252.128:8080');
      ws.onopen = function(){
          var LogOut={
            Action: "LogOut",
            Cookie: that.$store.state.loginCookie,
          };
          var newmsg=JSON.stringify(LogOut);
          console.log(newmsg);
          ws.send(newmsg);
      }; 
      ws.onmessage = function (e) {
          var received_msg = e.data;
          var mess = JSON.parse(received_msg); 
          console.log(mess);
          if(mess.Category="Response"&&mess.Code===200){
            that.$toast('退出成功');
            that.$router.push({name: 'LoginPage'});
            that.$store.state.loginCookie='';
          }else{
            that.$toast(mess.Message);
          } 
      };
      ws.onclose = (e) =>{
        console.log("服务器关闭");
      };
      ws.onerror = () =>{
        console.log("连接出错");
      };
    },
    toUserInfo() {
      this.$router.push({name: 'UserInfo'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.user {
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.myinfo{
  width: 100%;
  height: 53vw;
  display: block;
  background-image:url('../../../static/images/1.jpg');
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-color:#cccccc;
  position: relative;
  margin: 0 auto; 
  .info-position{
    left: 50%;
    position:absolute;
    padding-top: 20%;
    p{
      width: 50px;
      margin: 0 auto;
      line-height: 24px;
      color: #cccccc;
      margin-top: 0px;
      margin-left: -50%;
      text-align: center;
    }
    /* img{
      display:block;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      margin: 0 auto;
    } */
    .van-image{
      display: block;
      margin: 0 auto;
      border-radius: 50px;
      width: 100%;
      height: 100%;
      margin-left: -50%;
    }
  }
 
}
</style>
