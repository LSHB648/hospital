<template>
  <div class="Swipe">
      <van-swipe :autoplay="3000" indicator-color="white" :loop="true">
        <van-swipe-item v-for="(image, index) in images" :key="index" @click="onChange(index)">
          <img v-lazy="image"/>
        </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swipe',
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  methods: {
    onChange(inmageindex) {
      this.$toast(inmageindex);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"scoped>
  .Swipe{
    margin-top: 0px;
    background: rgb(255, 255, 255);
    img{
      width: 100%;
    }
  }
</style>
