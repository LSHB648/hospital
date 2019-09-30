<template>
  <div class="PersonalPage">
    <div class="myinfo">
      <div class="info-position">
        <!-- <img class="user-poster" src="../../static/images/2.jpg"> -->
        <van-image
          width="60"
          height="60"
          round
          fit="contain"
          lazy-load
          src="../../static/images/2.jpg"
        />
        <p>lushibao</p>
      </div>
    </div>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        已预约
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待就诊
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待支付
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        评价
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="points" title="我的信息" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="records" title="药品清单" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的消息" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
  name: 'PersonalPage',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data () {
    return {
     
    }
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.user {
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.myinfo{
  width: 100%;
  height: 53vw;
  display: block;
  background-image:url('../../static/images/1.jpg');
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-color:#cccccc;
  position: relative;
  margin: 0 auto; 
  .info-position{
    left: 50%;
    position:absolute;
    padding-top: 20%;
    p{
      width: 50px;
      margin: 0 auto;
      line-height: 24px;
      color: #cccccc;
      margin-top: 0px;
      margin-left: -50%;
    }
    /* img{
      display:block;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      margin: 0 auto;
    } */
    .van-image{
      display: block;
      margin: 0 auto;
      border-radius: 50px;
      width: 100%;
      height: 100%;
      margin-left: -50%;
    }
  }
 
}
</style>
