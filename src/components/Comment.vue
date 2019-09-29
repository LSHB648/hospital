<template>
  <div class="Comment">
      <!-- 填写评论部分 -->
      <h3>留言评论</h3>
      <hr>
      <div class="Username">
        <label>用户名：</label><br>
        <input type="text" class="form-control" placeholder="用户名" v-model="Commentinfo.name"/>
      </div>
      <div class="Commentinfo">
        <label>评论内容：</label><br>
        <textarea placeholder="评论内容" maxlength="120" v-model="Commentinfo.content"></textarea>
      </div>
      <div class="Username">
        <label>星级：</label>
        <van-rate v-model="value" />
      </div>
      <van-button type="primary" size="large" @click="submitComment(Commentlist.id)">提交评论</van-button>

      <!-- 展示所有评论内容 -->
      <hr>
      <div class="cmt-list" v-for="(item,index) in Commentlist" :key="item.id">
        <div class="cmt-item">
          <div class="cmt-user">
            第{{index+1}}楼：&nbsp;&nbsp;{{item.name}}&nbsp;&nbsp;发表时间：2019.9.29
          </div>
          <div class="cmt-body">
            {{item.content}}
          </div>
          <div class="cmt-star">
            <van-rate v-model="item.value" readonly />
          </div>
          <hr>
        </div>
      </div>

      <van-pagination 
        v-model="currentPage" 
        :total-items="totalnum" 
        :show-page-size="3" 
        :page-count="3"
        :items-per-page="2"
        force-ellipses
      />
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data () {
    return {
      value:3,
      currentPage:1,
      totalnum:10,
      Commentinfo:{
        id:'',
        name:'',
        content:''
      },
      Commentlist:[
        {
          id:'1',
          name:'张三',
          content:'医院服务非常好',
          value:5
        },
        {
          id:'2',
          name:'李四',
          content:'医院环境非常好',
          value:3
        }
      ],
    }
  },
  methods: {
    submitComment:function(id){
      let that=this;
      if (!that.Commentinfo.name || !that.Commentinfo.content) {
        this.$toast('用户名或评论内容不能为空！');
        return;
      }else{
        this.Commentinfo.id=this.Commentlist.length+1;
        this.Commentinfo.value=this.value;
        this.Commentlist.unshift(this.Commentinfo);
      }
      this.Commentinfo={
        id:'',
        name:'',
        content:''
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
