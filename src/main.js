// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* 导入axios */
import axios from 'axios'
//Vue.use(axios)  // 注意 这样的用法是有问题的，axios不支持Vue.use()的声明方式
Vue.prototype.$ajax = axios
// 只是import进来是无法使用 axios 命令的。所以我们将 axios 改写为 Vue 的原型属性。那么在其他组件中就能使用$ajax方法了


/* 导入vuex */
import Vuex from 'vuex'
import store from  './store/store'
Vue.use(Vuex)

/* 导入mui */
import './assets/lib/mui/css/mui.css'
import mui from './assets/lib/mui/js/mui.js'
Vue.prototype.mui=mui;

Vue.config.productionTip = false

/* 按需导入mint-ui相关组件 */
import { Navbar, TabItem , Field} from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component('mt-navbar', Navbar);
Vue.component('mt-tab-item', TabItem);
Vue.component('mt-field', Field);

let Base64 = require('js-base64').Base64;


/* 或写为
 * Vue.use(Button)
 * Vue.use(Cell)
 */

/* 按需引入vant相关的组件 */
import {Lazyload,Swipe,SwipeItem,Toast,NavBar,Tabbar, TabbarItem ,Grid, GridItem,Card,Tag,Tab, Tabs,
NoticeBar,Button,Rate,Pagination,PullRefresh, Image, RadioGroup, Radio} from 'vant';

 /* 实现懒加载 */
Vue.use(Lazyload, {
  lazyComponent: true
});
/* 轮播组件 */
Vue.use(Swipe).use(SwipeItem);
/* 弹框提示 */
Vue.use(Toast);
/* 顶部导航栏 */
Vue.use(NavBar);
/* 底部导航栏 */
Vue.use(Tabbar).use(TabbarItem);
/* 九宫格*/
Vue.use(Grid).use(GridItem);
/* 新闻列表 */
Vue.use(Card);
/* tag标签页 */
Vue.use(Tag);
/* tab标签页 */
Vue.use(Tab).use(Tabs);
/* 通知栏 */
Vue.use(NoticeBar);
/* 按钮 */
Vue.use(Button);
/* 评分 */
Vue.use(Rate);
/* 分页 */
Vue.use(Pagination);
/* 下拉刷新 */
Vue.use(PullRefresh);
/* 图片 */
Vue.use(Image);
/* 单选框 */
Vue.use(RadioGroup);
Vue.use(Radio);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
