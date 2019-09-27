<template>
  <div class="swipe">
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white" :loop="true">
        <van-swipe-item v-for="(image, index) in images" :key="index" @click="onChange(index)">
          <img v-lazy="image"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swipe',
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
<style scoped>
  .swipe{
    background: #000;
    margin-bottom: 10px;
    background-color: #fff;
  }
  img{
    width: 100%
  }
</style>
