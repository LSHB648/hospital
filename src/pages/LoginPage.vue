<template>
  <div class="LoginPage">
      <div class="mui-content">
        <form id='login-form' class="mui-input-group">

          <mt-field label="用户名" placeholder="请输入用户名" v-model="msg.Name"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="msg.PassWord"></mt-field>
          
          <van-radio-group v-model="msg.Type">
            <van-radio name="Patient" checked-color="#07c160">门诊用户</van-radio>
            <van-radio name="Doctor" checked-color="#07c160">医生</van-radio>
            <van-radio name="Admin" checked-color="#07c160">管理员</van-radio>
          </van-radio-group>
          
        </form>
        <button id='login' type="button" data-loading-text="提交中"  class="mui-btn mui-btn-block mui-btn-primary" @click="Login">登录</button>
        <p>
            <router-link to='/RegisterPage'>注册</router-link>
        </p>
        <p class="more-link">
            <router-link to='/'>返回首页</router-link>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
        msg:{
            Name: "",
            PassWord: "",
            Type: ""
        },
    }
  },
  methods: {
      Login(){
        let that=this;
        var ws = new WebSocket('ws://192.168.252.128:8080');
        ws.onopen = function(){
            var Logmsg={
             Action: "LogIn",
             Name: "",
             PassWord: "",
             Type: ""
            }
            Logmsg.Name=that.msg.Name;
            Logmsg.Type=that.msg.Type;
            Logmsg.PassWord= Base64.encode(that.msg.PassWord);
            var newmsg=JSON.stringify(Logmsg);
            ws.send(newmsg);
        }; 
        ws.onmessage = function (e) {
            var received_msg = e.data;
            var mess = JSON.parse(received_msg);  
            if(mess.Code===200){
              that.$toast('登录成功');
              that.msg.Name='';
              that.msg.PassWord='';
            }else{
              that.$toast(mess.Message);
              that.msg.Name='';
              that.msg.PassWord='';
            }
        };
        ws.onclose = (e) =>{
            console.log("服务器关闭");
        };
        ws.onerror = () =>{
            console.log("连接出错");
        };
      } 
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    p{
        text-align: center;
    }
    .mui-content{
        margin-top: 40px;
    }
    .van-radio-group{
        display: flex;
    }
    .van-radio{
       flex: 1;
       height: 50px;
       margin-left: 20px;
    }
</style>
