<template>
  <div class="LoginPage">
      <div class="typecho-login-wrap">
        <div class="typecho-login">
            <form action="" method="post" name="login" role="form">
                <p>
                    <label for="name" class="sr-only">用户名</label>
                    <input type="text" id="name" name="name" value="" placeholder="用户名" class="text-l w-100" autofocus />
                </p>
                <p>
                    <label for="password" class="sr-only">密码</label>
                    <input type="password" id="password" name="password" class="text-l w-100" placeholder="密码" />
                </p>
                <p class="submit">
                    <button type="submit" class="btn btn-l w-100 primary">登录</button>
                    <input type="hidden" name="referer" value="" />
                </p>
            </form>

            <p>
                <router-link to='/RegisterPage'>注册</router-link>
            </p>
            
            <p class="more-link">
                <router-link to='/'>返回首页</router-link>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
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
    @import "http://bluezyz.com/admin/css/normalize.css?v=17.10.30";
    @import "http://bluezyz.com/admin/css/grid.css?v=17.10.30";
    @import "http://bluezyz.com/admin/css/style.css?v=17.10.30";

</style>
