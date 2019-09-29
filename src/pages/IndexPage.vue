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
  </div>
</template>

<script>
import Swipe from '../components/Swipe.vue';
import Grid from '../components/Grid.vue';
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
  methods: {
    /* SentMsgToParent:function(){
      this.$emit("ListenToChildEvent",this.childList);
    } */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .IndexPage{
    background-color:#ffffff;
    overflow-x: hidden;
  }
</style>
