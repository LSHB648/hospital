<template>
  <div class="RegisterPage">
      <h3>注册界面</h3>
      <div class="panel panel-warning">
        <div class="panel-heading">
            <span class="glyphicon glyphicon-th-large" style="margin-right: 10px" />用戶注冊(每项必填)
        </div>
    </div>
    <form action="h5-1.htm" method="post">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="col-md-6">
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">推荐人</span>
                        <input type="text" name="txtParentUserId" class="form-control" maxlength="20" placeholder="推荐人帐号" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">帳    號</span>
                        <input type="text" name="txtUserId" class="form-control" maxlength="20" placeholder="帐号" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">昵    称</span>
                        <input type="text" name="txtUserName" class="form-control" maxlength="20" placeholder="昵称" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">密    码</span>
                        <input type="text" name="txtPassword1" class="form-control" placeholder="密码" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">密    码</span>
                        <input type="text" name="txtPassword2" class="form-control" placeholder="再次输入密码" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">微    信</span>
                        <input type="text" name="txtWeiXin" class="form-control" placeholder="微信" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">手    机</span>
                        <input type="text" name="txtMobile" class="form-control" placeholder="手机" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">验证码</span>
                        <input type="text" name="txtMobile" class="form-control  " placeholder="手机" />
                    </div>
                </div>
                <br />
            </div>
        </div>
        <ul class="pager   divider ">
            <li><a href="#">  注 册  </a></li>
        </ul>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
     
    }
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    /* @import "~@/C:/my-project/hospital/static/css/bootstrap.css"; */
</style>
