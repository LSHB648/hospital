<template>
  <div class="Index">
    <h1>这是子组件</h1>
    <h1>文件修改测试git</h1>
    <h1>git分支测试</h1>
<<<<<<< HEAD
    <h1>主分支测试</h1>
=======
    <h1>dev分支下修改过的提交</h1>
>>>>>>> dev
    <li v-for="item in parentmsg" :key="item.id">
        {{item.text}}
    </li>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: ['parentmsg'],
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

</style>
