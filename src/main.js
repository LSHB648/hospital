// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* 按需引入vant相关的组件 */
import {Lazyload,Swipe,SwipeItem,Toast,NavBar } from 'vant';
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.use(Swipe).use(SwipeItem);
Vue.use(Toast);
Vue.use(NavBar);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
