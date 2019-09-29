// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* 按需引入vant相关的组件 */
import {Lazyload,Swipe,SwipeItem,Toast,NavBar,Tabbar, TabbarItem ,Grid, GridItem,Card,Tag,Tab, Tabs,
NoticeBar,Button,Rate,Pagination} from 'vant';

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
