<template>
  <div class="IndexPage">
    <Swipe></Swipe>
    <Grid></Grid>
   <!--  <h1>这是子组件</h1>
    <h1>文件修改测试git</h1>
    <h1>git分支测试</h1>
    <h1>主分支测试</h1>
    <h1>dev分支下修改过的提交</h1>
    <h1>origin替换ssh地址提交测试2</h1>
    <li v-for="item in parentmsg" :key="item.id">
        {{item.text}}
    </li>
    <button @click="SentMsgToParent">向父组件传值</button> -->
    <!-- <div>
      <div class="addBtn" @click="handleAdd()">count++</div>
      <div class="addBtn" @click="handleSub()">count--</div>
      <div class="addBtn" @click="handleAddAsy()">异步count++（1S后执行）</div>
      <div class="addBtn" @click="handleSubAsy()">异步count--（1S后执行）</div>
      <h2>computed中通过state获取到的count:{{count}}</h2>
      <h2>computed中通过getters获取到计算后的count：{{getCount}}</h2>
    </div> -->
  </div>
</template>

<script>
import Swipe from '../../components/Swipe.vue';
import Grid from '../../components/Grid.vue';
export default {
  name: 'IndexPage',
   components: {
      Swipe: Swipe,
      Grid: Grid
  },
  data () {
    return {
     /*  childList: [
      { id: 0, text: '苹果' },
      { id: 1, text: '香蕉' },
      { id: 2, text: '西红时' }
    ] */

    }
  },
  computed: {
  
  },
  //监听count的变化
  watch: {

  },
  created () {
    this.GetUser();
  },
  methods: {
    GetUser(){
      let that=this;
      var ws = new WebSocket('ws://192.168.252.128:8080');
      ws.onopen = function(){
          var GetUserinfo={
            Action: "GetUser",
            Cookie: that.$store.state.loginCookie,
          };
          var newmsg=JSON.stringify(GetUserinfo);
          ws.send(newmsg);
      }; 
      ws.onmessage = function (e) {
          var received_msg = e.data;
          var mess = JSON.parse(received_msg); 
          that.$store.commit('saveUserinfo',mess.User);
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
<style lang="less" scoped>
  .IndexPage{
    background-color:#faf1f157;
    overflow-x: hidden;
  }
 
  .addBtn {
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    background-color: rgb(239, 241, 241);
    margin: 50px auto;
    cursor: pointer;
  }

</style>
