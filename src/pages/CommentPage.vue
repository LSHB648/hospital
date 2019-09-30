<template>
  <div class="CommentPage">
     <Comment></Comment>
     <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
       <p>刷新次数: {{ count }}</p>
     </van-pull-refresh>
  </div>
</template>

<script>
/* 引入评论子组件 */
import Comment from '../components/Comment';
export default {
  name: 'CommentPage',
  components: {
      Comment: Comment
  },
  data () {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
