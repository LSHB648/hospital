<template>
  <div class="RegisterPage">
   <van-nav-bar
      title="注册"
      left-arrow
      v-bind:left-arrow="leftShow"
      fixed
      @click-left="onClickLeft"
      id="navbar"
    />
    <div class="mui-content">
        <form class="mui-input-group">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="msg.Name"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="msg.PassWord"></mt-field>
            <mt-field label="真实姓名" placeholder="请输入真实姓名" v-model="msg.RealName"></mt-field>
        </form>
        <!-- /*注意：注册按钮不能和账号密码输入框放在一个form里面*/ -->
        <div class="mui-content-padded" align="center">
            <button type="button" class="mui-btn mui-btn-blue" @click="RegUser">注册</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      "leftShow":true,
        msg:{
          Name: "",
          PassWord: "",
          RealName: "",
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$toast('返回');
      this.$router.go(-1);
    },
    RegUser() {
      let that=this;
      var ws = new WebSocket("ws://192.168.252.128:8080");
      ws.onopen = function(){
          var regMsg={
               Action: "RegisterUser",
               Name: "",
               PassWord: "",
               Type: "Patient",
               RealName: "",
               Cookie: "" 
          };
          regMsg.Name=that.msg.Name;
          regMsg.PassWord= Base64.encode(that.msg.PassWord);
          regMsg.RealName=that.msg.RealName;
          var newMsg=JSON.stringify(regMsg);
          /* console.log(regMsg);
          alert("数据发送中..."); */
           // Web Socket 已连接上，使用 send() 方法发送数据
          ws.send(newMsg);
       }; 
       ws.onmessage = function (e) { 
          var received_msg = e.data;
          console.log(received_msg);
          var mess = JSON.parse(received_msg);  
          console.log(mess);
          if(mess.Action=='RegisterUser'&&mess.Code==200){
             that.$toast('注册成功');
             that.$router.push({name: 'LoginPage'});
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    
</style>
