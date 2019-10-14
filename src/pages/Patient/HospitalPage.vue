<template>
  <div class="HospitalPage">
     <mt-navbar v-model="selected" v-on="toHospiatalDetail(selected)">
      <mt-tab-item id="1">医院详情</mt-tab-item>
      <mt-tab-item id="2">挂号须知</mt-tab-item>
      <mt-tab-item id="3">医院地址</mt-tab-item>
    </mt-navbar>

    <router-view></router-view>
    <!-- <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container> -->
  </div>
</template>

<script>
export default {
  name: 'HospitalPage',
  data () {
    return {
      selected:'1',
      value:''
    }
  },
  methods: {
    /* 顶部导航栏路由跳转 */
    toHospiatalDetail:function(id){
        if(id=='1'){
          this.$router.push({name: 'Hospitainfo'});//开发的时候这里有个报错，解决方法：在项目目录下运行 npm i vue-router@3.0 -S 即可
        }else if(id=='2'){
          this.$router.push({name: 'HospitalTips'});
        }else{
          this.$router.push({name: 'Hospitalmap'});
        }
    }
  },
  /* updated:{
    this.toHospiatalDetail();
  } */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
